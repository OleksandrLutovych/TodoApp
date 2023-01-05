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
    addTodo:  (state, action) => {
      console.log(action.payload)

      state.todo.push('new element' + action.payload.text)
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
