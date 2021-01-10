import React, {useRef} from 'react';
import UserList from './UserList';

function App() {
  const users = [
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
  ];

  //값이 바뀐다고 컴포넌트가 리렌더링 될 필요가 없기 때문에 변수로 관리하는것도 괜찬다
  const nextId = useRef(4);
  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
