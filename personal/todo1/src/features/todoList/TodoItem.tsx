import { useAppSelector, useAppDispatch } from "@app/hooks";
import { MdDone, MdDelete } from "react-icons/md";
import { todoItem, toggle, remove } from "./todoListSlice";
import styled, { css } from "styled-components";

const TodoItem = ({ id, text, done }: todoItem) => {
  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggle(id));
  const onRemove = () => dispatch(remove(id));

  return (
    <ItemBlock>
      <div onClick={onToggle}>{done && <MdDone />}</div>
      <p>{text}</p>
      <div onClick={onRemove}>
        <MdDelete />
      </div>
    </ItemBlock>
  );
};

const ItemBlock = styled.div``;

export default TodoItem;
