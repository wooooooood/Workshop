import React, {useRef, useState, useMemo} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('센다');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };
  const onRemove = id =>{
    setUsers(users.filter(user => user.id != id));
  }
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ));
  }
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
