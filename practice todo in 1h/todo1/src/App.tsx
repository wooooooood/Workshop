import TodoList from "@features/todoList/TodoList";
import GlobalStyle from "@styles/global";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <TodoList />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
