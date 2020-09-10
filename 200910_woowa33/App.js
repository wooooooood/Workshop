import React from "react";

const SessionItem = ({ title }) => <li>{title}</li>;

class ClassApp extends React.Component {
  constructor(props) {
    super(props); //=React.Component. 컨벤션임

    this.state = {
      //instance객체를 만들기 때문에 다 this로 참조
      displayOrder: "ASC"
    };
  }

  toggleDisplayOrder = () => {
    this.setState({
      //애로우는 raxical? 문맥 컨텍스트 따름. 다른건 실행 컨택스트 따라서 바인딩을 해야함. 애로우는 바인딩 필요없음
      displayOrder: displayOrder === "ASC" ? "DESC" : "ASC"
    });
  };

  render() {
    return (
      <div>
        여기여기
        <button onClick={this.toggleDisplayOrder}>정렬</button>
      </div>
    );
  }
}

const App = (props) => {
  const { displayOrder, toggleDisplayOrder } = React.useState("ASC");
  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i
  }));

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
