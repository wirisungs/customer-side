// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBLl8W6RiJb6Qnqzk6qZtZf8YnLZZQ6boA",
  authDomain: "loginfpt-a3806.firebaseapp.com",
  projectId: "loginfpt-a3806",
  storageBucket: "loginfpt-a3806.appspot.com",
  messagingSenderId: "961082754143",
  appId: "1:961082754143:web:b0d39f49e03926eb06c7ea",
  measurementId: "G-LS6NJN4FMC"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth };