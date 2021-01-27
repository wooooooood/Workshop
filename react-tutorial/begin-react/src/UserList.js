import React, {useEffect, useContext} from 'react';
import {UserDispatch} from './App';
const User = React.memo(function User({user, onRemove, onToggle}) {
  const {username, email, id, active} = user;
  const dispatch = useContext(UserDispatch);

  useEffect(() => { 
    console.log('user값이 설정됨');
    return () => {
      console.log('user값이 바뀌기 전');
    }
  }, [user]);

  return (
    <div>
      <b style={{
        color: active? 'green' : 'black',
        cursor: 'pointer'
      }}
      onClick={() => dispatch({
        type: 'TOGGLE_USER',
        id
      })}>{username}</b>&nbsp;<span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  );
});

function UserList({users, onRemove, onToggle}) { 
  return (
    <div>
      {
        users.map(
          user => (
          <User user={user} key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}/>
          )
        )
      }
    </div>
  );
}

export default React.memo(
  UserList, 
  (prevProps, nextProps) => nextProps.users === prevProps.users //나머지 props가 정말 고정적이어서 할 필요가 없는지?
);

//usecallback, react memo등을 쓴다고 무조건 성능이 개선되는 것은 아님
//최적화가 필요하겠다 싶은 컴포넌트 구현에 사용하도록
