import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCQ3zwvRIaGqJeHkj78i1n8TKYFNC67fVs",
    authDomain: "crwn-db-f8e88.firebaseapp.com",
    projectId: "crwn-db-f8e88",
    storageBucket: "crwn-db-f8e88.appspot.com",
    messagingSenderId: "413863293197",
    appId: "1:413863293197:web:829280e8b1780dc6858044",
    measurementId: "G-H3E3WQD4DV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
