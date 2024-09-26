// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfiuFlf4bAU_ZjF9QWJDBA2r5KZEdFjAw",
  authDomain: "netflixgpt-2cf75.firebaseapp.com",
  projectId: "netflixgpt-2cf75",
  storageBucket: "netflixgpt-2cf75.appspot.com",
  messagingSenderId: "708586554105",
  appId: "1:708586554105:web:e9f68c415dcfc78ca85828",
  measurementId: "G-BW6QPPXKBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();
