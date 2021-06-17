import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs0XCALcvKaZlSlDmndXWlMD2a6d27TbM",
    authDomain: "projectuas-pbf.firebaseapp.com",
    databaseURL: "https://projectuas-pbf-default-rtdb.firebaseio.com",
    projectId: "projectuas-pbf",
    storageBucket: "projectuas-pbf.appspot.com",
    messagingSenderId: "415655157323",
    appId: "1:415655157323:web:248121478ca8569d0237ce",
    measurementId: "G-1CHBC100YE"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export default firebaseConfig;