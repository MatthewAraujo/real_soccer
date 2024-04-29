import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtvj0747A5QsRcoxqUluM9NXqIB4lRXJg",
  authDomain: "futebol-3b89b.firebaseapp.com",
  projectId: "futebol-3b89b",
  storageBucket: "futebol-3b89b.appspot.com",
  messagingSenderId: "8685824856",
  appId: "1:8685824856:web:00acb1c62fed4ceb5b532d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
