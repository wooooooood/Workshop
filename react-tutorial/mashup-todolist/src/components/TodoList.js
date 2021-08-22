import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; //TodoTemplate에서 flex, column 설정했으니 1이라고 하면 차지할 수 있는 모든 영역을 차지하게됨
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text={"프로젝트 생성하기"} done={true} />
      <TodoItem text={"프로젝트 생성하기2"} done={false} />
      <TodoItem text={"프로젝트 생성하기3"} done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
