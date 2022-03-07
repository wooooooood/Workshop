import TodoList from "@features/todoList/TodoList";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoList />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  background-color: #f5f5f5;
}
`;

export default App;
