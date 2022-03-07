import { useAppSelector, useAppDispatch } from "@app/hooks";
import { items, todoItem } from "./todoSlice";
import TodoAdd from "./TodoAdd";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = () => {
  const Items = useAppSelector(items);
  return (
    <List>
      <TodoHeader />
      <TodoAdd />
      {Items.map((x: todoItem) => (
        <TodoItem key={x.id} id={x.id} text={x.text} done={x.done} />
      ))}
    </List>
  );
};

const List = styled.section`
  width: 500px;
  height: 600px;
  margin: 10px auto;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
`;

export default TodoList;
