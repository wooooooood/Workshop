import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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
  
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onToggle={onToggle}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
