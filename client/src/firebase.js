// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //put this in .env file later
  apiKey: "AIzaSyBjNhnMt5Gc3AWHb1hxbBVj0KhGWIJw41M",
  authDomain: "nav-niwaas.firebaseapp.com",
  projectId: "nav-niwaas",
  storageBucket: "nav-niwaas.appspot.com",
  messagingSenderId: "242082037433",
  appId: "1:242082037433:web:cf678ceb4a59aa16502568"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);