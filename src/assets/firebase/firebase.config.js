// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const fromEnv = import.meta.env;

const firebaseConfig = {
  apiKey: fromEnv.VITE_APIKEY,
  authDomain: fromEnv.VITE_AUTHDOMAIN,
  projectId: fromEnv.VITE_PROJECTID,
  storageBucket: fromEnv.VITE_STORAGEBUCKET,
  messagingSenderId: fromEnv.VITE_MESSAGINGSENDERID,
  appId: fromEnv.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
