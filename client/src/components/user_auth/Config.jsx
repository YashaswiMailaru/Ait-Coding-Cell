import firebase from 'firebase/app';
import  "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

export default firebaseConfig;