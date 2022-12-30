import React from "react";
import { CounterFunc } from "./Components/CounterFunc";
import CounterByClass from './Components/CounterByClass'

function App() {
  return (
    <div className="test">
      <h1>Hello React!</h1>
      <CounterFunc />
      <CounterByClass />
    </div>
  );
}

export default App;
