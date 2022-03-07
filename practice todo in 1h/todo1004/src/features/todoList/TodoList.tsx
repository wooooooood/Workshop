import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { items, todoItem } from "./todoSlice";
import TodoHeader from "./TodoHeader";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import styled from "styled-components";

export default function TodoList() {
  const itemList = useAppSelector(items);
  const dispatch = useAppDispatch();

  return (
    <List>
      <TodoHeader />
      <hr />
      <TodoAdd />
      <div>
        {itemList.map((x: todoItem) => (
          <TodoItem key={x.id} id={x.id} text={x.text} done={x.done} />
        ))}
      </div>
    </List>
  );
}

const List = styled.div`
  width: 500px;
  height: 700px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  margin: 10px auto;
  padding: 20px;
`;
