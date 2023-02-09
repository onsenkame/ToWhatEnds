// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkhZtMdoQshDTsmYSZaXINulPpKFCWXV4",
  authDomain: "towhatends-75857.firebaseapp.com",
  projectId: "towhatends-75857",
  storageBucket: "towhatends-75857.appspot.com",
  messagingSenderId: "605326633036",
  appId: "1:605326633036:web:ae5b7467a3c7229284ece9",
  measurementId: "G-YWVPNYRFTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);