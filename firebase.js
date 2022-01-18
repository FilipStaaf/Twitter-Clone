
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0_Qt2wzLiU2G7dblKPh-0A71HEkoQCOk",
    authDomain: "twitterclone-afc2e.firebaseapp.com",
    projectId: "twitterclone-afc2e",
    storageBucket: "twitterclone-afc2e.appspot.com",
    messagingSenderId: "221979654292",
    appId: "1:221979654292:web:bcb6932bdf11e17ebb5c81"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };