import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function P2Child1() {
  return (
    <div className="bg-white px-8 py-10 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-8 border border-gray-200">
      <Heading />
      <Display />
      <Buttons />
      <Message />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="text-2xl font-bold text-indigo-600">Context Counter</h1>
  );
}

function Display() {
  const { count } = useContext(CounterContext);

  return (
    <div className="text-xl text-gray-700 font-semibold">
      Current Count: <span className="text-indigo-500">{count}</span>
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300 shadow hover:scale-105"
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300 shadow hover:scale-105"
      >
        Decrease
      </button>
    </div>
  );
}

function Message() {
  const { count } = useContext(CounterContext);

  const getMessage = () => {
    if (count < 0) return "Count is negative!";
    if (count === 0) return "Start counting!";
    if (count < 5) return "Keep going!";
    return "You're doing great!";
  };

  return <p className="text-gray-600 font-medium mt-2">{getMessage()}</p>;
}

export default P2Child1;
