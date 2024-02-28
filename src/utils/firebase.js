/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkF3m1A3HAb8TlktTSM68R3N1lonku0N4",
  authDomain: "netflix-gpt-edf11.firebaseapp.com",
  projectId: "netflix-gpt-edf11",
  storageBucket: "netflix-gpt-edf11.appspot.com",
  messagingSenderId: "231617567417",
  appId: "1:231617567417:web:3e7804b0c507308e175968",
  measurementId: "G-E5F73HYFDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()