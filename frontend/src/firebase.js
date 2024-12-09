// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4IGRGORvm_WoVjPW9NIB4IlXJEhx-3pU",
  authDomain: "soulsborne-261a4.firebaseapp.com",
  projectId: "soulsborne-261a4",
  storageBucket: "soulsborne-261a4.firebasestorage.app",
  messagingSenderId: "637293740646",
  appId: "1:637293740646:web:3150ba436cd0926f9e63a7",
  measurementId: "G-QX3YC039PG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
