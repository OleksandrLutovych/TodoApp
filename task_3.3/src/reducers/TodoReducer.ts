import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ITodoApi, ITodoState } from "../types/redux.types";

export const initialState: ITodoState = {
  todo: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk<ITodoApi[], undefined, {rejectValue: string}>(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk<string, string, {rejectValue:string}>(
  "todo/deleteTodo",
  async (id, { rejectWithValue}) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo.push({
        userId: 1,
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    editTodoState: (state, action) => {
      const [newText, todoItem] = action.payload;
      const [newTodoArr] = state.todo.filter((item) => item.id == todoItem.id);

      newTodoArr.title = newText;
    },
    completedTodo: (state, action) => {
      const [editTodo] = state.todo.filter(
        (item) => item.id === action.payload.id
      );
      editTodo.completed = !editTodo.completed;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action: any) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    })
    builder.addCase(deleteTodo.rejected, (state, action: any) => {
      state.error = action.payload
    })
  },
});

export const { addTodo, removeTodo, editTodoState, completedTodo } =
  todoSlice.actions;
export const selectCount = (state: RootState) => state.todo;
export default todoSlice.reducer;
