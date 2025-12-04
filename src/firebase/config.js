import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5OhMQVWtqvaWtYV3uPYkJNhbXx8_LUB4",
  authDomain: "final-web-1717e.firebaseapp.com",
  projectId: "final-web-1717e",
  storageBucket: "final-web-1717e.appspot.com",
  messagingSenderId: "690318475368",
  appId: "1:690318475368:web:06b7044eec4d97eb573bdd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
console.log("Auth es:", auth);
console.log("projectId:", auth.app.options.projectId);