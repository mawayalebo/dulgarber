import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC-KMUGhbV1SGXUn-bMsHpmAYBrl7js1hM",
    authDomain: "dulgarber.firebaseapp.com",
    projectId: "dulgarber",
    storageBucket: "dulgarber.appspot.com",
    messagingSenderId: "613641440705",
    appId: "1:613641440705:web:d676ceb112a49a82fb7340",
    measurementId: "G-YLY707XYLZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export { auth, db };