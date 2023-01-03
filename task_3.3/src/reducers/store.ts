import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { todoSlice } from "./TodoReducer";
import todoReducer from "./TodoReducer";

export const store = configureStore(
  {
    reducer: {
      todo: todoReducer
    },
  }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
