import React from "react";

function ChildFour({ count }) {
  return (
    <p className="text-gray-600 font-medium">
      {count > 0
        ? `You have increased the count to ${count}`
        : `Count is ${count}`}
    </p>
  );
}

export default ChildFour;
