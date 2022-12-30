import type { RootState } from "../Store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Store/slice";

export function CounterFunc() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-box">
      <p>Number: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Reduce</button>
    </div>
  );
}
