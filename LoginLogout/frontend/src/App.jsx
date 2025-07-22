import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
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
