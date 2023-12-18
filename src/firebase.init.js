// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvheKp_i_LhjczSHxdl7N7GR1ntLLZahk",
  authDomain: "nextgenjob-codecanva.firebaseapp.com",
  projectId: "nextgenjob-codecanva",
  storageBucket: "nextgenjob-codecanva.appspot.com",
  messagingSenderId: "148665060434",
  appId: "1:148665060434:web:b80990c36cbc806ada638b",
  measurementId: "G-F5Q25HWBZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;