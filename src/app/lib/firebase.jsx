// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG4DIQB2Y5RxQegxr1UmuzJb05ZGcA_QU",
  authDomain: "satvam-0624.firebaseapp.com",
  projectId: "satvam-0624",
  storageBucket: "satvam-0624.appspot.com",
  messagingSenderId: "896763076768",
  appId: "1:896763076768:web:8829e39fabc2c2fc86a9c5",
  measurementId: "G-WZDTJLB3KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
