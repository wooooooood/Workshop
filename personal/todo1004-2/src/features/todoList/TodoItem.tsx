import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { toggle, remove, todoItem, edit } from "./todoSlice";
import styled from "styled-components";
import { MdDone, MdDelete, MdEdit } from "react-icons/md";

const TodoItem = ({ id, text, done }: todoItem) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const onToggle = () => dispatch(toggle(id));
  const onRemove = () => dispatch(remove(id));
  const onEditClick = () => {
    setIsEdit(!isEdit);
  };
  const onEditTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEditText(e.target.value);
  const onEditTextSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editText === "") {
      alert("내용을 입력하세요!");
      return;
    }

    dispatch(edit({ id, text: editText, done }));
    setIsEdit(false);
  };

  return (
    <Item>
      <div className="info">
        <div className="toggle-box" onClick={onToggle}>
          {done && <MdDone />}
        </div>
        {isEdit ? (
          <form onSubmit={onEditTextSubmit}>
            <input value={editText} onChange={onEditTextChange} />
          </form>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="controls">
        <div className="edit-icon" onClick={onEditClick}>
          <MdEdit />
        </div>
        <div className="remove-icon" onClick={onRemove}>
          <MdDelete />
        </div>
      </div>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;

  .toggle-box {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid gray;
    margin-right: 10px;
    padding: 2px;
    color: green;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .controls {
    display: flex;
    gap: 5px;
  }

  .edit-icon {
    display: flex;
    align-items: center;
    color: gray;

    &:hover {
      color: pink;
    }
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
