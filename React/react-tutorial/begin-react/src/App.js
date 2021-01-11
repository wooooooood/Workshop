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
    setUsers([...users, user]); //spread
    //concat: setUsers(users.concat(user));
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
    //삭제시에는 filter를 사용하면 편하다
    setUsers(users.filter(user => user.id != id));
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'v',
      email: 'v@v.com'
    },
    {
      id: 2,
      username: 'v2',
      email: 'v2@v.com'
    },
    {
      id: 3,
      username: 'v3',
      email: 'v3@v.com'
    },
  ]);
  
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
