import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create  user using gmail

  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut Or Logout Functionality

  const logOut = () => {
    return signOut(auth);
  };

  // User is Available or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
