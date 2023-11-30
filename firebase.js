import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRdCSAe_qGPc2lj6y5op7NNytb1w_x_k",
  authDomain: "skycast-4e8e8.firebaseapp.com",
  projectId: "skycast-4e8e8",
  storageBucket: "skycast-4e8e8.appspot.com",
  messagingSenderId: "808827449972",
  appId: "1:808827449972:web:4b8921521f31f5780e1721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
