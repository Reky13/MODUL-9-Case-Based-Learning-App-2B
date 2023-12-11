import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCnzbhB_0mQIzKdPJxuT5D6TaSIQlf8ml0",
  authDomain: "nous-4f5ea.firebaseapp.com",
  databaseURL: "https://nous-4f5ea-default-rtdb.firebaseio.com",
  projectId: "nous-4f5ea",
  storageBucket: "nous-4f5ea.appspot.com",
  messagingSenderId: "1015669586046",
  appId: "1:1015669586046:web:2a2853ecff3faf1964c02f"

});

const FIREBASE = firebase;

export default FIREBASE;

