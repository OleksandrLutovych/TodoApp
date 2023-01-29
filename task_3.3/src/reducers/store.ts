import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoReducer";
import postsReducer from './PostsReducer'
import UsersReducer from "./UsersReducer";

export const store = configureStore(
  {
    reducer: {
      todo: todoReducer,
      posts: postsReducer,
      users: UsersReducer,
    },
  }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
