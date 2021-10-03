import { useAppSelector, useAppDispatch } from "@app/hooks";
import { ChangeEvent, useState } from "react";
import { add, edit, itemList } from "./todoListSlice";

const TodoAdd = () => {
  const dispatch = useAppDispatch();
  const [newText, setNewText] = useState("");
  const [value, setValue] = useState("");

  const onAdd = () => dispatch(add(newText));
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
        <button onClick={onAdd}>추가</button>
      </form>
    </div>
  );
};

export default TodoAdd;
