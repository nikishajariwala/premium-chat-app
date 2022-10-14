// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiYDkY2g5QwgpkNbv977ryTERkC5SN4Y4",
  authDomain: "react-chat-db-fd278.firebaseapp.com",
  projectId: "react-chat-db-fd278",
  storageBucket: "react-chat-db-fd278.appspot.com",
  messagingSenderId: "279991379233",
  appId: "1:279991379233:web:ea73ff2a2a076598358a60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
