// import ListGroup from "./components/ListGroup";
// import Header from "./components/Header";
// import { Car, Garage } from "./components/Car";
// import Football from "./components/Footall";
// function App() {
//   return (
//     <div>
//       <Header />
//       <ListGroup />
//       <Car brand="Ford"></Car>
//       <Garage brand="Ford"></Garage>
//       <Football></Football>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-80">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Counter</h1>
        <p className="text-xl mb-6 text-gray-600">
          Count Value: <span className="font-semibold">{count}</span>
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={decrease}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Decrease
          </button>
          <button
            onClick={increase}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
