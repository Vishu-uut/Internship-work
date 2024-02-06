// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0WBliMv0favRcyM5a9-OTNPIYBmeMAJE",
  authDomain: "edutech-f8171.firebaseapp.com",
  projectId: "edutech-f8171",
  storageBucket: "edutech-f8171.appspot.com",
  messagingSenderId: "462923726301",
  appId: "1:462923726301:web:0dc6aadff6914dfd14ca34",
  measurementId: "G-514C7QLCH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);