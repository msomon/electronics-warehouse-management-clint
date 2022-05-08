// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKsQAUmiING84bLK9SlX3Yb2kHX2lDI_A",
  authDomain: "electronics-warehouse-59bbd.firebaseapp.com",
  projectId: "electronics-warehouse-59bbd",
  storageBucket: "electronics-warehouse-59bbd.appspot.com",
  messagingSenderId: "491041441858",
  appId: "1:491041441858:web:977de25efcd5c6727685db",
  measurementId: "G-WHMB4JDWLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth