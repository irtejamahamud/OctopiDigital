import React, { useState } from "react";
import CounterContext from "./CounterContext";
import P2Child1 from "./P2Child1";

export default function Parent2() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <P2Child1 />
    </CounterContext.Provider>
  );
}
