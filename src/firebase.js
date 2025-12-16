// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.react_apiKey,
    authDomain: process.env.react_authDomain,
    projectId: process.env.react_projectId,
    storageBucket: process.env.react_storageBucket,
    messagingSenderId: process.env.react_storageBucket,
    appId: process.env.react_appId,
    measurementId: process.env.react_measurementId
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };