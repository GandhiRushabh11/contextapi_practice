import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";
const Counter = () => {
  const counterState = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Increment Button
      </button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>
        Decrement Button
      </button>
    </div>
  );
};
export default Counter;
