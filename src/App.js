import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import UserLogin1 from "./components/UserLogin1";
import UserLogin2 from "./components/UserLogin2";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login-1" element={<UserLogin1 />} />
      <Route path="/user-login-2" element={<UserLogin2 />} />
    </Routes>
  );
}

export default App;
