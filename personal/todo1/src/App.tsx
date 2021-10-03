import { createGlobalStyle } from "styled-components";
import TodoList from "@features/todoList/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    //font-family: "Noto Sans", sans-serif;
    background-color: #F5F5F5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h3>todo list</h3>
        <TodoList />
      </div>
    </>
  );
}

export default App;
