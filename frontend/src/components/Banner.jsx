import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
const Banner = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Banner;
