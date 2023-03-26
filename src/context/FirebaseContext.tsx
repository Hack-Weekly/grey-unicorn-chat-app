import React, { useState, useEffect, createContext, FC, useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged,signInWithPopup,signOut,User } from "firebase/auth";
import {ref,get, set, push} from "firebase/database"
import { auth, db } from "../firebase/config";

interface Props {
    children: React.ReactNode;
  }

// Create a type for the authentication context
type AuthContextType = {
  currentUser: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  getMsg: () => Promise<void>;
  sendMsg: (msg: string) => Promise<any>;
};

// Create a new context for the authentication state
export const FirebaseContext = createContext<AuthContextType>({
  currentUser: null,
  signInWithGoogle: async () => {},
  logOut: async () => {},
  getMsg: async() => {},
  sendMsg: async (msg) => {},
});

// Create a provider for the authentication context
export const FirebaseProvider: FC<Props> = ({ children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Generate a new, auto-incremented key for a message
  const messagesRef = push(ref(db, "messages"));
  const messageId = messagesRef.key;
  
  // Set a value at the new user path
  const messageDataRef = ref(db, `messages/${messageId}`);

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
    await signInWithPopup(auth,provider)
      .then((result) => {
        // The signed-in user info.
        setCurrentUser(result.user);
      }).catch((error)=> {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // The email of the user's account used.
        console.log(error.customData.email);
        // The AuthCredential type that was used.
        console.log(GoogleAuthProvider.credentialFromError(error));
      })
  };

  // Handle sign out
  const logOut = async () => {
    await signOut(auth);
  };

  //Receive messages and listen in any changes
  const getMsg = async() => {

  }

  //Send a message
  const sendMsg = async (msg) => {
      set(messageDataRef, {
        messages: msg,
        name: currentUser?.displayName,
        timestamp: Date.now()
      }).then(() => {
        console.log("Value written to database");
      }).catch((error) => {
        console.error("Error writing to database: ", error);
      });
  }

  // Provide the authentication state and methods to the app
  const values: AuthContextType = {
    currentUser,
    signInWithGoogle,
    logOut,
    getMsg,
    sendMsg
  };

  return (
    <FirebaseContext.Provider value={values}>
      {!loading}
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(FirebaseContext);