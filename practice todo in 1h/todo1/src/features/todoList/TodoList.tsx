import { useAppSelector, useAppDispatch } from "@app/hooks";
import { ChangeEvent, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import { add, edit, itemList } from "./todoListSlice";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(itemList);

  return (
    <div>
      <TodoHeader />
      <TodoAdd />
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
