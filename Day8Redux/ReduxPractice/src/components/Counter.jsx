import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByamount,
  decrementByamount,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [customValue, setCustomValue] = useState(5);
  return (
    <div className="text-center mt-10 space-y-4">
      <h1 className="text-2xl">Redux Counter</h1>
      <h2 className="text-3xl font-bold">{count}</h2>

      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-green-500 text-white"
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
        <button
          className="px-4 py-2 bg-gray-500 text-white"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>

      <div className="mt-4 space-x-2">
        <input
          type="number"
          className="border px-2 py-1"
          value={customValue}
          onChange={(e) => setCustomValue(Number(e.target.value))}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white"
          onClick={() => dispatch(incrementByamount(customValue))}
        >
          Increment by {customValue}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white"
          onClick={() => dispatch(decrementByamount (customValue))}
        >
          Decrement by {customValue}
        </button>
      </div>
    </div>
  );
}
