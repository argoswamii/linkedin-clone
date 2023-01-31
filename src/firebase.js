import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jog92gOyMZiNHMpfYJ-7mUifmOezCyA",
  authDomain: "linkedin-clone-d3df3.firebaseapp.com",
  projectId: "linkedin-clone-d3df3",
  storageBucket: "linkedin-clone-d3df3.appspot.com",
  messagingSenderId: "330772124367",
  appId: "1:330772124367:web:f0ecbf2a93aec757c85dba",
  measurementId: "G-8X461VB4L3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
