import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext('defaultValue');

function Child(){
  const text = useContext(MyContext); //context 내 값 읽어와서 사용할 수 있게 해주는 react 내장훅
  return <div>hello {text}</div>
}

function Parent() {
  return <Child/>
}

function GrandParent(){
  return <Parent/>
}

function ContextSample() {
const [value, setValue] = useState(true);

  //MyContext값을 지정해주고싶다면 provider를 사용해야함
  return (
    <MyContext.Provider value={value? "GOOD":"BAD"}>
      <GrandParent/>
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  )
}

export default ContextSample;

/*
1. Context를 만들 때는 createContext(기본값)를 사용하고 파라미터는 Provider라는 컴포넌트가 사용되지 않았을 때의 기본값.
2. 값을 설정하고 싶다면 Provider로 value값을 설정해줘야 함
3. 유동적으로 변경 가능
*/
