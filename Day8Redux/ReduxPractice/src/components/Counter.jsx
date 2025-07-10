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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Redux Counter</h1>
        <div className="text-5xl font-bold text-blue-600">{count}</div>

        <div className="space-x-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>

        <div className="space-y-2">
          <input
            type="number"
            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customValue}
            onChange={(e) => setCustomValue(Number(e.target.value))}
          />
          <div className="flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition"
              onClick={() => dispatch(incrementByamount(customValue))}
            >
              Increment by {customValue}
            </button>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg w-full transition"
              onClick={() => dispatch(decrementByamount(customValue))}
            >
              Decrement by {customValue}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
