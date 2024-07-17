import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATDHyewQ_V8tuhXpenqV_L78DqUkEDH3o",
  authDomain: "react-netflix-clone-affd8.firebaseapp.com",
  projectId: "react-netflix-clone-affd8",
  storageBucket: "react-netflix-clone-affd8.appspot.com",
  messagingSenderId: "1008509183832",
  appId: "1:1008509183832:web:2540da06d0a631df22272d",
  measurementId: "G-8J9H2L6H2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
