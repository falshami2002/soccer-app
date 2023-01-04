// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBReTkxzOJrchTJN3nUCoXByTR73Anen_w",
  authDomain: "soccer-app-fcdfc.firebaseapp.com",
  projectId: "soccer-app-fcdfc",
  storageBucket: "soccer-app-fcdfc.appspot.com",
  messagingSenderId: "562103969622",
  appId: "1:562103969622:web:578c48c3c0c1e68da7d8f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

