import React from "react";

function ChildThree({ count, setCount }) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2 bg-green-500 text-white rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg hover:scale-105"
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="px-5 py-2 bg-red-500 text-white rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg hover:scale-105"
      >
        Decrease
      </button>
    </div>
  );
}

export default ChildThree;
