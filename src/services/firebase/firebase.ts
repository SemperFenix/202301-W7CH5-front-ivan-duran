// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJERj3mQHoKjnpMFko6uXVHo2QcObFLKw",
  authDomain: "pruebecitas-b944f.firebaseapp.com",
  projectId: "pruebecitas-b944f",
  storageBucket: "pruebecitas-b944f.appspot.com",
  messagingSenderId: "1008430917959",
  appId: "1:1008430917959:web:3575723de4ccde3c148462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
