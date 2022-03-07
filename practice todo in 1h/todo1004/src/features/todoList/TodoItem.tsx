import { useAppSelector, useAppDispatch } from "@app/hooks";
import { todoItem, toggle, remove } from "./todoSlice";
import { MdDone, MdDelete } from "react-icons/md";
import styled from "styled-components";

const TodoItem = ({ id, text, done }: todoItem) => {
  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggle(id));
  const onRemoveClick = () => dispatch(remove(id));

  return (
    <Item>
      <div className="item">
        <div className="todo-box" onClick={onToggle}>
          {done && <MdDone />}
        </div>
        <p className="todo-text">{text}</p>
      </div>
      <div className="remove-icon" onClick={onRemoveClick}>
        <MdDelete />
      </div>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;

  .todo-box {
    border-radius: 50%;
    border: 1px solid gray;
    width: 20px;
    height: 20px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
  }

  .todo-text {
    padding: 0 2px;
    display: flex;
    align-items: center;
  }

  .item {
    display: flex;
    align-items: center;
  }

  .remove-icon {
    display: flex;
    align-items: center;
    color: gray;

    &:hover {
      color: crimson;
    }
  }
`;

export default TodoItem;
