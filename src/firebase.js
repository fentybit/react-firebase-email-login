import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyb4uBCFO2tJGIFk_yHKVlsuXlQ-tp1XQ",
  authDomain: "react-firebase-email-log-50ac1.firebaseapp.com",
  projectId: "react-firebase-email-log-50ac1",
  storageBucket: "react-firebase-email-log-50ac1.appspot.com",
  messagingSenderId: "732624421389",
  appId: "1:732624421389:web:25e9028dd0b8f32ebe8b44"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
