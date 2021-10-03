import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@app/store";
import { GetAsync } from "@utils/api";

export interface todoListState {
  status: "idle" | "loading" | "failed";
  itemList: Array<todoItem>;
  currentId: number;
}

export interface todoItem {
  id: number;
  text: string;
  done: boolean;
}

const initialState: todoListState = {
  status: "idle",
  itemList: [
    { id: 1, text: "do this", done: true },
    { id: 2, text: "do that", done: false },
  ],
  currentId: 2,
};

export const incrementAsync = createAsyncThunk(
  "todoList/get",
  async (amount: number) => {
    const response = await GetAsync("test");
    return response.data;
  }
);

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    add: (state, text: PayloadAction<string>) => {
      state.currentId += 1;
      state.itemList = [
        ...state.itemList,
        { id: state.currentId, text: text.payload, done: false },
      ];
    },
    remove: (state, id: PayloadAction<number>) => {
      state.itemList = [
        ...state.itemList.filter((item) => item.id !== id.payload),
      ];
    },
    toggle: (state, id: PayloadAction<number>) => {
      state.itemList = [
        ...state.itemList.map((item) =>
          item.id === id.payload ? { ...item, done: !item.done } : item
        ),
      ];
    },
    edit: (state, action: PayloadAction<todoItem>) => {
      state.itemList = [
        ...state.itemList.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        //state.value = action.payload;
      });
  },
});

export const { add, edit, toggle, remove } = todoListSlice.actions;

export const itemList = (state: RootState) => state.todoList.itemList;
export default todoListSlice.reducer;
