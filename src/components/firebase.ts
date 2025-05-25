import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLQ784OnYn9McWngXzWfxmXJjiWKHffA",
  authDomain: "raphaeltrial-1b594.firebaseapp.com",
  projectId: "raphaeltrial-1b594",
  storageBucket: "raphaeltrial-1b594.appspot.com",
  messagingSenderId: "610219183058",
  appId: "1:610219183058:web:fd6641a166092ececdd60b",
  measurementId: "G-QQRNF885T2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const firestoreDb = getFirestore(firebaseApp);

export { firebaseApp, auth, firestoreDb };