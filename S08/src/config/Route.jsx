import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Sigin";
import SignUp from "../pages/signup/SignUp";
function RouteComp() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path={"*"} element={<h1>Page Not found</h1>} />
    </Routes>
  );
}

export default RouteComp;
