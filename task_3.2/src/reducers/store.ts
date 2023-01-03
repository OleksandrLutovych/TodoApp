import { compose, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { countReducer } from "./countReducer";

export const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
