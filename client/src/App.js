import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SingleProfile from "./pages/singleProfile/SingleProfile";
import { AuthContext } from "./context/AuthContext";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/newuser/:id"
        element={
          <ProtectedRoute>
            {" "}
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/:id"
        element={
          <ProtectedRoute>
            <SingleProfile />{" "}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
