import { useAppSelector, useAppDispatch } from "@app/hooks";
import { items, todoItem } from "./todoSlice";
import styled from "styled-components";

const TodoHeader = () => {
  const itemList = useAppSelector(items);
  return (
    <Header>
      <h3>TodoList</h3>
      <p>
        {itemList.filter((x: todoItem) => x.done).length}
        <span className="fade-text">개 완료했습니다</span>
      </p>
    </Header>
  );
};

const Header = styled.div`
  .fade-text {
    color: gray;
  }
`;

export default TodoHeader;
