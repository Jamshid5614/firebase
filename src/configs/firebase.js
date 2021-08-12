import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmkhq5GKgurefZaaJ7X4VrL4kye-9pirQ",
    authDomain: "expense-client-app-a896f.firebaseapp.com",
    projectId: "expense-client-app-a896f",
    storageBucket: "expense-client-app-a896f.appspot.com",
    messagingSenderId: "653890427310",
    appId: "1:653890427310:web:5092c5619c92abc6e6903f",
    measurementId: "G-Y6EXRT3Y88"
  };

  const app = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export {app as default,db};