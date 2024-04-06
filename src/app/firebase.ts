import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0546EuUN4htnZW3RI57qNKjqH_p0Xqs",
  authDomain: "sharoku-v1.firebaseapp.com",
  projectId: "sharoku-v1",
  storageBucket: "sharoku-v1.appspot.com",
  messagingSenderId: "165198466819",
  appId: "1:165198466819:web:d132ad0c832a8448996336"
};

// var storage = firebase.storage()     CONTEMPLAR POSIBILIDAD CREAR UN BUCKET DE FIRESTORE PARA ASSETS

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }