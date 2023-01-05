import { useState, useEffect, createContext, useContext } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

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

//Function to signup
export function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

//Custom Hook || Can be removed
export function useAuth() {
    const [currentUser, setCurrentUser ] = useState<User | null>();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user => {setCurrentUser(user)})
        return unsub;
    },[])

    return currentUser;
}

//Function to logout
export function logout() {
    return signOut(auth);
}

//Function to login
export function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}


//User context to allow every page to access user
const UserContext = createContext(null as unknown as User);

export function UserProvider({ children }:any) {
    const [currentUser, setCurrentUser ] = useState<User | null>();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user => {setCurrentUser(user)})
        return unsub;
    },[])

    return (
        <UserContext.Provider value={currentUser!}>
            {children}
        </UserContext.Provider>
    )

}

export function useCurrentUser() {
    return useContext(UserContext);
}