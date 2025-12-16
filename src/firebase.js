// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4GVgWKd7V6SEb1LzaJHgA27HSFGPEE2o",
    authDomain: "test-project-fc812.firebaseapp.com",
    projectId: "test-project-fc812",
    storageBucket: "test-project-fc812.firebasestorage.app",
    messagingSenderId: "708846715628",
    appId: "1:708846715628:web:98b91e7a82c4fcf5631bc9",
    measurementId: "G-7429W0EZ2D"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };