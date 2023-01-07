import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ItodoState } from "../types/redux.types";

export const initialState: ItodoState = {
  todo: [],
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const data = await response.json();
  return data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todo.push({
        id: new Date().toISOString(),
        title: action.payload.text,
        completed: false,
      });
    },
    removeTodo: (state, actions) => {},
    editTodo: (state, actions) => {},
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todo = action.payload
    });
  },
});
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export const selectCount = (state: RootState) => state.todo;
export default todoSlice.reducer;
