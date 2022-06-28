import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SingleProfile from "./pages/singleProfile/SingleProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newuser/:id" element={<Profile />} />
      <Route path="/user/:id" element={<SingleProfile />} />
    </Routes>
  );
}

export default App;
