import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('센다');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'v',
      email: 'v@v.com',
      active: true,
    },
    {
      id: 2,
      username: 'v2',
      email: 'v2@v.com',
      active: false,
    },
    {
      id: 3,
      username: 'v3',
      email: 'v3@v.com',
      active: false,
    },
  ]
}

function reducer(state, action){
  switch (action.type){
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
          ? {...user, active: !user.active}
          : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled Action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const {username, email} = form;
  const nextId = useRef(4); //기존에 3개가 등록되어있으므로
  const {users} = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current +=1;
    reset();
  }, [username, email, reset]); //reset은 eslint규칙상 반환한 거기 때문에 넣어줌, 사실 안넣어도 동작함

  const onToggle = useCallback(id => {
    dispatch ({
      type: 'TOGGLE_USER',
      id
    });
  }, []); //dep 배열 비움: 컴포넌트 처음 만들때만 이 함수 만들고 그다음부턴 재사용 가능

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove}/>
    <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

/* * *
useReducer vs useState
ex. 컴포넌트에서 관리하는 값이 하나고, 그 값이 불변값(문자열..)이라면 => useState가 편하다
ex. 컴포넌트에서 관리하는 값이 여러개라 상태가 복잡해지거나 값을 바꿔야할때 => useReducer가 좀 더 편할수도!
    ex. 한 함수 안에서 set을 여러개 할 때? 함 해보고 결정
자주 사용해보고 맘에드는것 
* * */
