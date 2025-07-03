import React from "react";

export default function ChildTwo() {
  return (
    <>
      <div>ChildTwo</div>
      <ChildThree count={count} />
      <ChildFour count={count} />
    </>
  );
}
