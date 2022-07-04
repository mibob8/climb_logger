// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "climblogger-343120.firebaseapp.com",
  projectId: "climblogger-343120",
  storageBucket: "climblogger-343120.appspot.com",
  messagingSenderId: "626579506515",
  appId: "1:626579506515:web:9ba04ebb86835b19c28da6",
  measurementId: "G-ML7QE5TJRL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);