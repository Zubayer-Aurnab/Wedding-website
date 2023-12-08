// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5ixrs2AX7wSIbtMLZBy2idBq5iIiyLk",
  authDomain: "wedding-management-575f2.firebaseapp.com",
  projectId: "wedding-management-575f2",
  storageBucket: "wedding-management-575f2.appspot.com",
  messagingSenderId: "993476156179",
  appId: "1:993476156179:web:13de33d20095e1e90c98e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth