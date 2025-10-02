import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="home-box">
      <h1>Welcome to DEV@Deakin 🎉</h1>
      <button onClick={logout} className="btn">Logout</button>
    </div>
  );
}
