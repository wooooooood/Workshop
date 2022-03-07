import { useAppSelector, useAppDispatch } from "@app/hooks";
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { todoItem, toggle, remove } from "./todoListSlice";
import styled, { css } from "styled-components";

const TodoItem = ({ id, text, done }: todoItem) => {
  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggle(id));
  const onRemove = () => dispatch(remove(id));
  const onEdit = () => dispatch(remove(id));

  return (
    <ItemBlock>
      <div className="check-box" onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <div>
        <p className="text">{text}</p>
        <div className="edit-icon" onClick={onEdit}>
          <MdEdit />
        </div>
      </div>
      <div onClick={onRemove}>
        <MdDelete />
      </div>
    </ItemBlock>
  );
};

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  .check-box {
    width: 20px;
    height: 20px;
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
  }

  .text {
    display: inline-flex;
    &:hover {
      .edit-icon {
        opacity: 1;
        color: red;
      }
    }
  }

  .edit-icon {
    display: inline-flex;
    opacity: 0.3;
    color: blue;
  }
`;

export default TodoItem;
