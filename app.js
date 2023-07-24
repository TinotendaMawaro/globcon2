// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU3czJE2RJeRI-aucYz2giJvFFeC-uPJg",
  authDomain: "globcon-263.firebaseapp.com",
  projectId: "globcon-263",
  storageBucket: "globcon-263.appspot.com",
  messagingSenderId: "917804110826",
  appId: "1:917804110826:web:7926bf6413198a39f2d893",
  measurementId: "G-22CR88C6QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);