// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMlhLsnfrxw8ySqCcidr2obq8Rtie6KlQ",
  authDomain: "sports-king-5c148.firebaseapp.com",
  projectId: "sports-king-5c148",
  storageBucket: "sports-king-5c148.firebasestorage.app",
  messagingSenderId: "525732497655",
  appId: "1:525732497655:web:9fb88a1caae53719ab2bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth