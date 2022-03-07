import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { add } from "./todoSlice";

const TodoAdd = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === "") {
      alert("내용을 입력하세요!");
      return;
    }

    dispatch(add(value));
    setValue("");
  };

  return (
    <Add>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="입력 후 엔터를 누르세요"
        />
      </form>
    </Add>
  );
};

const Add = styled.div`
  input {
    font-size: 16px;
    outline: none;
    border: 1px solid gray;
    padding: 7px 10px;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
  }

  input:focus {
    border: 1px solid green;
  }
`;

export default TodoAdd;
