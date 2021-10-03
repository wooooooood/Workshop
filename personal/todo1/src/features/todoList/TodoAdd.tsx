import { useAppSelector, useAppDispatch } from "@app/hooks";
import { ChangeEvent, useState } from "react";
import { add, edit, itemList } from "./todoListSlice";

const TodoAdd = () => {
  const dispatch = useAppDispatch();
  const [newText, setNewText] = useState("");
  const [value, setValue] = useState("");

  const onClick = () => {
    dispatch(add(newText));
    setValue("");
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewText(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //prevent refresh

    dispatch(add(newText));
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
