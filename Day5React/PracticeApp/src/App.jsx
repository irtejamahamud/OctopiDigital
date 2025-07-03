import React, { useEffect, useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    alert("Counter Value Changed");
  }, []);

  const increase = () => setcount(count + 1);
  const decrease = () => setcount(count - 1);

  return (
    <>
      <h1 className="p-5 bg-blue font-bold">Hello</h1>
    </>
  );
}

export default App;
