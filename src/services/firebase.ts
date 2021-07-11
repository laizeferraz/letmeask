import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByj08i6Ab1dC2oE6BeNvd83uTMnj-hM5c",
  authDomain: "letmeask-17cbf.firebaseapp.com",
  databaseURL: "https://letmeask-17cbf-default-rtdb.firebaseio.com",
  projectId: "letmeask-17cbf",
  storageBucket: "letmeask-17cbf.appspot.com",
  messagingSenderId: "528242621138",
  appId: "1:528242621138:web:003f6c7fd60836d7c00b0b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
