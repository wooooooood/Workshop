import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@app/store";

export interface todoState {
  currentId: number;
  items: Array<todoItem>;
  status: "idle" | "loading" | "failed";
}

export interface todoItem {
  id: number;
  text: string;
  done: boolean;
}

const initialState: todoState = {
  currentId: 1,
  status: "idle",
  items: [{ id: 1, text: "d", done: true }],
};

export const incrementAsync = createAsyncThunk(
  "todo/fetchCount",
  async (amount: number) => {
    //const response = await fetchCount(amount);
    //return response.data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, textAction: PayloadAction<string>) => {
      state.currentId += 1;
      state.items = [
        ...state.items,
        { id: state.currentId, text: textAction.payload, done: false },
      ];
    },
    toggle: (state, idAction: PayloadAction<number>) => {
      state.items = [
        ...state.items.map((x) =>
          x.id === idAction.payload ? { ...x, done: !x.done } : x
        ),
      ];
    },
    edit: (state, todoItemAction: PayloadAction<todoItem>) => {
      state.items = [
        ...state.items.map((x) =>
          x.id === todoItemAction.payload.id
            ? { ...x, text: todoItemAction.payload.text }
            : x
        ),
      ];
    },
    remove: (state, idAction: PayloadAction<number>) => {
      state.items = [...state.items.filter((x) => x.id !== idAction.payload)];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.value += action.payload;
  //     });
  // },
});

export const { add, toggle, edit, remove } = todoSlice.actions;
export const items = (state: RootState) => state.todo.items;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default todoSlice.reducer;
