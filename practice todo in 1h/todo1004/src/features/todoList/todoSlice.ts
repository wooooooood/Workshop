import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@app/store";

export interface todoState {
  status: "idle" | "loading" | "failed";
  items: Array<todoItem>;
  currentId: number;
}

export interface todoItem {
  id: number;
  text: string;
  done: boolean;
}

const initialState: todoState = {
  status: "idle",
  items: [{ id: 1, text: "1", done: true }],
  currentId: 1,
};

export const incrementAsync = createAsyncThunk(
  "todo/fetchCount",
  async (amount: number) => {}
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, textAction: PayloadAction<string>) => {
      state.currentId += 1;
      state.items = [
        ...state.items.concat({
          id: state.currentId,
          text: textAction.payload,
          done: false,
        }),
      ];
    },
    remove: (state, idAction: PayloadAction<number>) => {
      state.items = [...state.items.filter((x) => x.id !== idAction.payload)];
    },
    edit: (state, todoItemAction: PayloadAction<todoItem>) => {
      state.items = [
        ...state.items.map((x) => {
          if (x.id === todoItemAction.payload.id) {
            return { ...x, text: todoItemAction.payload.text };
          }

          return x;
        }),
      ];
    },
    toggle: (state, idAction: PayloadAction<number>) => {
      state.items = [
        ...state.items.map((x) =>
          x.id === idAction.payload ? { ...x, done: !x.done } : x
        ),
      ];
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { add, remove, edit, toggle } = todoSlice.actions;

export const items = (state: RootState) => state.todo.items;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default todoSlice.reducer;
