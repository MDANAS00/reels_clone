import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhYcmtVuAYDC5Lox87aDOUzBZxSdCXUEw",
  authDomain: "reels-a7a6a.firebaseapp.com",
  projectId: "reels-a7a6a",
  storageBucket: "reels-a7a6a.appspot.com",
  messagingSenderId: "580292606536",
  appId: "1:580292606536:web:285eb7ba1117d6d4eb367d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()