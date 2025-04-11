import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4VUGkI8MDbNRMnz8cQhx7arJsxLqy6cs",
  authDomain: "nutrifix-6939f.firebaseapp.com",
  projectId: "nutrifix-6939f",
  storageBucket: "nutrifix-6939f.appspot.com", // fixed domain name typo (was .firebasestorage.app)
  messagingSenderId: "552546129985",
  appId: "1:552546129985:web:c1633187f6a7c9ae988ec0",
  measurementId: "G-2JWEKFFHH3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
