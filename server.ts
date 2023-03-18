import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: "grey-unicorn-chat-app.firebaseapp.com",

  databaseURL: process.env.DATABASE_URL,

  projectId: process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: "419503031315",

  appId: process.env.APP_ID,

  measurementId: "G-07J1EWFJW8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getDatabase(app);



