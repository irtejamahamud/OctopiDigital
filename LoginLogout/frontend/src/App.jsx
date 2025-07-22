import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [authChange, setAuthChange] = useState(0);
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={<Signup onAuthChange={() => setAuthChange((c) => c + 1)} />}
        />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/home" />
            ) : (
              <Login onAuthChange={() => setAuthChange((c) => c + 1)} />
            )
          }
        />
        <Route
          path="/home"
          element={
            token ? (
              <Home onAuthChange={() => setAuthChange((c) => c + 1)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/home" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
