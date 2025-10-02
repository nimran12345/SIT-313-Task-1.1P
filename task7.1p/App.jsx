import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import AuthProvider from "./contexts/AuthContext";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>DEV@Deakin</h2>
      <input className="search" placeholder="Search..." />
      <button>Post</button>
      <Link className="nav-link" to="/login">Login</Link>
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}
