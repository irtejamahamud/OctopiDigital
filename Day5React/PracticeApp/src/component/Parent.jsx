import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";
import ChildFour from "./ChildFour";

export default function Parent() {
  return (
    <>
      <div>Parent</div>
      <ChildOne />
      <ChildTwo count={count} />
      <ChildThree count={count} />
      <ChildFour count={count} />
    </>
  );
}
