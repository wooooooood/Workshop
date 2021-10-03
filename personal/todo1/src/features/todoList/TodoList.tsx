import { useAppSelector, useAppDispatch } from "@app/hooks";
import { useState } from "react";
import { add, update, itemList } from "./todoListSlice";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(itemList);
  const [newText, setNewText] = useState("");

  const onAdd = () => {
    dispatch(add(newText));
  };

  const onAddKeyUp = (e: KeyboardEvent): void => {
    if (e.key === "Enter") dispatch(add(newText));
  };

  return (
    <div>
      hi
      <div>
        <input
          type="text"
          value={newText}
          onChange={({ target }) => setNewText(target.value)}
        />
        <button type="button" onClick={onAdd}>
          추가
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
