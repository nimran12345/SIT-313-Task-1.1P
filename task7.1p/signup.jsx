import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        name,
        email,
        createdAt: new Date().toISOString()
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-box">
      <h3>Create a DEV@Deakin Account</h3>
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Email*</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password*</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <label>Confirm password*</label>
        <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
        <button type="submit" className="btn">Create</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
