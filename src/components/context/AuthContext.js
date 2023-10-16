import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config.";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContexts = createContext();
const auth = getAuth(app);


const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user,setUser]=useState('');
  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const outUser = () => {
    return signOut(auth);
  };
  const updateUser=(profile)=>{
    return updateUser(auth.currentUser,profile)
  }

  const info = {
    signWithGoogle,
    registerUser,
    loginUser,
    outUser,
    updateUser,
    user
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth context user ", currentUser);
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContexts.Provider value={info}>{children}</AuthContexts.Provider>;
};

export default AuthContext;
