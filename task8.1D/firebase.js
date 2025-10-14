// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; //  import auth

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTUCTwB2faOY2LGRcCmZz3wmeoO6S5E_k",
  authDomain: "d-d352e.firebaseapp.com",
  projectId: "d-d352e",
  storageBucket: "d-d352e.appspot.com", // corrected bucket
  messagingSenderId: "348356802685",
  appId: "1:348356802685:web:43f74ac5d324afae9d1914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // add this line

console.log("Firebase successfully connected!");
