// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCLloGIupIBZ5OnXZ4fGA0Lx2gUfdqVyQ",
  authDomain: "fir-project-c2240.firebaseapp.com",
  projectId: "fir-project-c2240",
  storageBucket: "fir-project-c2240.firebasestorage.app",
  messagingSenderId: "281103474181",
  appId: "1:281103474181:web:6d93711bb44142bb7b466c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app