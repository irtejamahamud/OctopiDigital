import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-4">Redux Counter</h1>
      <h2 className="text-xl mb-4">{count}</h2>
      <button
        className="px-4 py-2 bg-green-500 text-white mr-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
