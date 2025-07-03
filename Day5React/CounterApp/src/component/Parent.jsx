import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";
import ChildFour from "./ChildFour";

function Parent({ count, setCount }) {
  return (
    <div className="bg-white px-8 py-10 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-8 border border-gray-200">
      <ChildOne />
      <ChildTwo count={count} />
      <ChildThree count={count} setCount={setCount} />
      <ChildFour count={count} />
    </div>
  );
}

export default Parent;
