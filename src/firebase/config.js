// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcPLM7Cid95hcw-vQIb660FkGI8RtTr5w",
  authDomain: "blogdev-61051.firebaseapp.com",
  projectId: "blogdev-61051",
  storageBucket: "blogdev-61051.appspot.com",
  messagingSenderId: "763638985147",
  appId: "1:763638985147:web:02b706d62d977a27e7949e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };