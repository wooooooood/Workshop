import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

//함수를 새로 만드는 것(선언)자체는 메모리/cpu소모가 없으므로 부하가 걸리지 않지만
//한번 만든 함수는 최대한 재사용!!
//props가 바뀌지 않았다면 virtual dom이 하는 리렌더링을 하지 않을 수 있다!
//매번 함수가 새로 만들어지는 구조라면 최적화 불가능

function countActiveUsers(users) {
  console.log('센다');
  return users.filter(user => user.active).length;
}

function App() {
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users => users.concat(user)); //여기에서 최신 users를 조회하므로 dep에 안넣어도됨
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }, [inputs]); //inputs가 바뀔때만 함수가 만들어지고 그렇지 않으면 함수 재사용
  const onRemove = useCallback(id =>{
    setUsers(users => users.filter(user => user.id != id));
  }, [users]);
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ));
  }, []);  //최적화 전단계임. 렌더링 확인은 react dev tools라는 extension깔아서 사용
  
  const count = useMemo(() => countActiveUsers(users), [users]); //users가 바뀔 때에만 함수가 호출되고 그렇지 않으면 이전 값을 재사용한다

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onToggle={onToggle}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
