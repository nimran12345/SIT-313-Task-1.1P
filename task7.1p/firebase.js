import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuYxNgikQ9rNWRyHYRVpmQW03990OlSR8",
  authDomain: "task7nimran.firebaseapp.com",
  projectId: "task7nimran",
  storageBucket: "task7nimran.firebasestorage.app",
  messagingSenderId: "1014050364341",
  appId: "1:1014050364341:web:f4ec5ebe41e1870f46d7fc",
  measurementId: "G-3HPH0Y5J0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add these two lines:
export const auth = getAuth(app);
export const db = getFirestore(app);
