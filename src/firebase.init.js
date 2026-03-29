// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn8yoKmWpE0fshfaYFV-32vI0uyzvdeHQ",
  authDomain: "coffee-store-de5a6.firebaseapp.com",
  projectId: "coffee-store-de5a6",
  storageBucket: "coffee-store-de5a6.firebasestorage.app",
  messagingSenderId: "522902115851",
  appId: "1:522902115851:web:5a36b4c1dc6de6f7a1d90e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
