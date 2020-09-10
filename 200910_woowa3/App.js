import React, { useEffect } from "react";

const SessionItem = ({ title }) => <li>{title}</li>;

const App = (props) => {
  const { displayOrder, toggleDisplayOrder } = React.useState("ASC");
  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i
  }));

  //제어 안되는 애들(sideEffect)을 몰아넣는곳
  //리턴을 함수로 해주면 App component가 ui에서 사라질 때 호출됨
  useEffect(() => {
    return () => {
      //ex. 구독해제
      //이미 있는 객체를 내가 임의로 날리는 법은 없다
      //js gc가 알아서 한다
    };
  });

  const onToggleDisplayOrder = () => {
    toggleDisplayOrder(displayOrder === "ASC" ? "DESC" : "ASC");
  };

  return (
    <div>
      <header>
        <h1>React and TypeScript</h1>
      </header>
      <p>전체 세션 갯수: 4개 {displayOrder}</p>
      <button onClick={onToggleDisplayOrder}>재정렬</button>
      <ul>
        {orderedSessionList.map((session) => (
          <SessionItem title={session.title} />
        ))}
      </ul>
    </div>
  );
};

export default App;
