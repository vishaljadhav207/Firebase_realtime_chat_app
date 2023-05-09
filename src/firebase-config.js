// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider}from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5M3J2_BuiO4azoR34__mnfiLQDi1gtVQ",
  authDomain: "chatapp-ac9c8.firebaseapp.com",
  projectId: "chatapp-ac9c8",
  storageBucket: "chatapp-ac9c8.appspot.com",
  messagingSenderId: "241970173966",
  appId: "1:241970173966:web:e81ae3de4f4575abdc445f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);