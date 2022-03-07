import { useAppSelector, useAppDispatch } from "@app/hooks";
import { ChangeEvent, useState } from "react";
import { add, edit, itemList } from "./todoListSlice";

const TodoAdd = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const onClick = () => {
    dispatch(add(value));
    setValue("");
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //prevent refresh

    dispatch(add(value));
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
      </form>
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoAdd;
