import React, { useState } from "react";
import Parent from "./component/Parent";
import Parent2 from "./component/Parent2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-row items-center justify-center gap-20 py-10">
      <Parent count={count} setCount={setCount} />
      <Parent2 />
    </div>
  );
}

export default App;
