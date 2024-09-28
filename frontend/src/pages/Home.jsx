import React, { useContext } from "react";
import { ThemeContext } from "../context/Context";
import { Navigate } from "react-router-dom";
import Sidebar from "./../components/Sidebar";
import Rightbar from "../components/Rightbar";

const Home = () => {
  const { authorised } = useContext(ThemeContext);
  if (!authorised) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <Sidebar />
      <Rightbar />
    </div>
  );
};

export default Home;
