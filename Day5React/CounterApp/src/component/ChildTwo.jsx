import React from "react";

function ChildTwo({ count }) {
  return (
    <div className="text-xl text-gray-700">
      <strong>Current Count:</strong> {count}
    </div>
  );
}

export default ChildTwo;
