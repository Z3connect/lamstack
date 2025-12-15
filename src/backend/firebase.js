// Firebase configuration - shared between website and admin
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtW3yB5oD8rvkv1eJYEtwWwcVRX3BG0yw",
  authDomain: "lamstackwebsite.firebaseapp.com",
  projectId: "lamstackwebsite",
  storageBucket: "lamstackwebsite.firebasestorage.app",
  messagingSenderId: "652585139722",
  appId: "1:652585139722:web:ac6e72faf497fe49cca9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
