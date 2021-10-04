import { useState, ChangeEvent, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { items, todoItem, add } from "./todoSlice";
import styled from "styled-components";

const TodoAdd = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value === "") {
      alert("값을 입력하세요!");
      return;
    }

    dispatch(add(value));
    setValue("");
  };
  return (
    <Add>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          placeholder="입력 후 엔터를 누르세요"
          onChange={onChange}
        />
      </form>
    </Add>
  );
};

const Add = styled.div`
  input {
    border-bottom: 1px solid gray;
    padding: 2px 0;
    outline: none;
  }
`;

export default TodoAdd;
