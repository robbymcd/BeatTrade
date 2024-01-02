// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaJglSDPD5riUcFbie0zvLaYEwB9zg9nA",
  authDomain: "beattrade-316f0.firebaseapp.com",
  databaseURL: "https://beattrade-316f0-default-rtdb.firebaseio.com",
  projectId: "beattrade-316f0",
  storageBucket: "beattrade-316f0.appspot.com",
  messagingSenderId: "212626146418",
  appId: "1:212626146418:web:570faa94cd8f92152aaeeb",
  measurementId: "G-Q0KC6VW06G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);