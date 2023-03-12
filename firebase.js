// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFMK4I1LAhVhcWrBSG42MT8Jb8sY2pzng",
    authDomain: "chownow-e950f.firebaseapp.com",
    projectId: "chownow-e950f",
    storageBucket: "chownow-e950f.appspot.com",
    messagingSenderId: "105537087510",
    appId: "1:105537087510:web:872bec91f3517d89b5ed37",
    measurementId: "G-03QPEK8H60"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
