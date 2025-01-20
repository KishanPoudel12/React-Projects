// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/Auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3hegkReIlLuKGXcxOsN3qELYWAAfq_gk",
  authDomain: "food-recipe-app-5ff51.firebaseapp.com",
  projectId: "food-recipe-app-5ff51",
  storageBucket: "food-recipe-app-5ff51.firebasestorage.app",
  messagingSenderId: "362619192545",
  appId: "1:362619192545:web:92aa095def0e94a8b5e3a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
