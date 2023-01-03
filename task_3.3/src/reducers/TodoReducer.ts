import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ItodoState {
  todo: Array<string>;
}

const initialState: ItodoState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:  (state, actions) => {
      state.todo.push('new element')
    },
    removeTodo:  (state, actions) => {
      
    },
    editTodo:  (state, actions) => {
      
    },
  }
})
export const {addTodo, removeTodo, editTodo} = todoSlice.actions
export const selectCount = (state: RootState) => state.todo;
export default todoSlice.reducer
