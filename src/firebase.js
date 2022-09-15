import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyASQP91Y9QwgSr4fNc2G7JPA6jijY6mJYw",
  authDomain: "kingsley-linkedin-clone.firebaseapp.com",
  projectId: "kingsley-linkedin-clone",
  storageBucket: "kingsley-linkedin-clone.appspot.com",
  messagingSenderId: "142116066091",
  appId: "1:142116066091:web:6800c29ca588af9b176b6e"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;