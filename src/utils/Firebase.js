// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcwq_Pw6Wt96yOiDMpJqhHufDwQ_TbZBg",
  authDomain: "netflix-india-914c7.firebaseapp.com",
  projectId: "netflix-india-914c7",
  storageBucket: "netflix-india-914c7.appspot.com",
  messagingSenderId: "831703259731",
  appId: "1:831703259731:web:c9993364f50f756553c4a6",
  measurementId: "G-G6J005SRTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()