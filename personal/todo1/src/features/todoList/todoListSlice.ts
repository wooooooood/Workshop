import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@app/store";
import { GetAsync } from "@utils/api";

export interface todoListState {
  status: "idle" | "loading" | "failed";
  itemList: Array<todoItem>;
}

interface todoItem {
  id: number;
  text: string;
}

const initialState: todoListState = {
  status: "idle",
  itemList: [],
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
      state.itemList = [...state.itemList, { id: 1, text: text.payload }];
    },
    delete: (state, id: PayloadAction<number>) => {
      state.itemList = [
        ...state.itemList.filter((item) => item.id !== id.payload),
      ];
    },
    update: (state, action: PayloadAction<todoItem>) => {
      state.itemList = [
        ...state.itemList.map((item) =>
          item.id === action.payload.id
            ? { id: item.id, text: action.payload.text }
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

export const { add, update } = todoListSlice.actions;

export const itemList = (state: RootState) => state.todoList.itemList;
export default todoListSlice.reducer;
