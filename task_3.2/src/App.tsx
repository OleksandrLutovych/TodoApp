import React from "react";
import "./App.css";
import { increment, reduce } from "./actions/actions";
import { useAppDispatch, useAppSelector } from "./reducers/hook";
import { selectCount } from "./reducers/countReducer";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);

  return (
    <div className="">
      <h1>Count:{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reduce())}>Reduce</button>
    </div>
  );
}

export default App;
