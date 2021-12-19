import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut} from "firebase/auth";
import { doc, setDoc ,getFirestore , getDocs ,collection, getDoc,addDoc , onSnapshot ,query ,where,updateDoc } from "firebase/firestore"; 
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";

initializeApp({
    apiKey: "AIzaSyBZiZQdwtqf5wbAvGP3Q8RL7KdluJwEEEw",
    authDomain: "finalhakathon-a7647.firebaseapp.com",
    projectId: "finalhakathon-a7647",
    storageBucket: "finalhakathon-a7647.appspot.com",
    messagingSenderId: "1048517892448",
    appId: "1:1048517892448:web:1203657a00b1ee1e6d6605",
    measurementId: "G-NXL2Z7R94L"
  });
let storage = getStorage() 
let db = getFirestore();
  
const auth = getAuth();

export {
  getDownloadURL,
  uploadBytes ,
  ref,
   storage,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    doc,
    setDoc,
    getFirestore,
    collection,
    getDocs,
    db,
    getDoc,addDoc
    ,onSnapshot,
    query,where,updateDoc
};