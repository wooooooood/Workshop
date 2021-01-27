import React, {useReducer, useMemo, createContext} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser/>
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
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
