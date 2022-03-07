import { useAppSelector, useAppDispatch } from "@app/hooks";
import { add, edit, itemList, todoItem } from "./todoListSlice";

const TodoHeader = () => {
  const items = useAppSelector(itemList);
  return (
    <div>
      <h3>todo list</h3>
      전체
      {items.length}개 중 {items.filter((item: todoItem) => item.done).length}개
      완료
    </div>
  );
};

export default TodoHeader;
