import React, { useState, useEffect, createContext, FC } from "react";
import firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged,signInWithPopup,signOut,User } from "firebase/auth";
import { auth } from "../firebase/config";

interface Props {
    children: React.ReactNode;
  }

// Create a type for the authentication context
type AuthContextType = {
  currentUser: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
};

// Create a new context for the authentication state
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  signInWithGoogle: async () => {},
  logOut: async () => {},
});

// Create a provider for the authentication context
export const AuthProvider: FC<Props> = ({ children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Listen for changes in the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Handle Google sign-in
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider);
  };

  // Handle sign out
  const logOut = async () => {
    await signOut(auth);
  };

  // Provide the authentication state and methods to the app
  const values: AuthContextType = {
    currentUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};