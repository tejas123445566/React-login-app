import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Dvdk7PMveY_BrNlR8cOXTFrX4H_aD0k",
  authDomain: "login-auth-9c844.firebaseapp.com",
  projectId: "login-auth-9c844",
  storageBucket: "login-auth-9c844.firebasestorage.app",
  messagingSenderId: "444114252748",
  appId: "1:444114252748:web:d5ff101f3d37f2ba976369",
};

const app = initializeApp(firebaseConfig);

// ✅ Auth
export const auth = getAuth(app);