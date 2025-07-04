import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  return (
    <main className="">
      <Navbar />
      <Outlet />
      <div className="text-center p-5 border border-red-300 bg-blue-600">
        footer
      </div>
    </main>
  );
};

export default Main;
