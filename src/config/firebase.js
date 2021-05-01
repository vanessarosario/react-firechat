

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyBPdIQ30lb8HAxTFHU9vxRMdSK6xSP1hlc",
    authDomain: "app-chat-46e0c.firebaseapp.com",
    projectId: "app-chat-46e0c",
    storageBucket: "app-chat-46e0c.appspot.com",
    messagingSenderId: "343819591460",
    appId: "1:343819591460:web:1971c72a1eb58716fe9db1",
    measurementId: "G-DTPYMS6FQP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }

