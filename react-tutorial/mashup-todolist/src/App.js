import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <div className="App">
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </div>
    </TodoProvider>
  );
}

export default App;
