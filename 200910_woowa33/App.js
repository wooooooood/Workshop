import React from "react";

const SessionItem = ({title}) => <li>{title}</li>;

const App = (props) => {
  const {sessionList} = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: 1
  }));

  return (
    <div>
      <header>
      <h1>
      React and TypeScript
      </h1>
      </header> 
      <p>전체 세션 갯수: 4개</p>
      <button>재정렬</button>
      <ul>
        {orderedSessionList.map((session) => (
          <SessionItem title ={session.title}/>
        ))}
      </ul>
    </div>
  )
}

export default App;
