import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDfQOwlKE9nC7r-pQBZcS8MPpINNqql-QQ",

  authDomain: "grey-unicorn-chat-app.firebaseapp.com",

  databaseURL: "https://grey-unicorn-chat-app-default-rtdb.firebaseio.com",

  projectId: "grey-unicorn-chat-app",

  storageBucket: "grey-unicorn-chat-app.appspot.com",

  messagingSenderId: "419503031315",

  appId: "1:419503031315:web:0a92881a05fccd97c2ebe6",

  measurementId: "G-07J1EWFJW8"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase();
