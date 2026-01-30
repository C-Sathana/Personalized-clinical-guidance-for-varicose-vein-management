// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5RJdfEqyjtvcsvl-DckKCVfLXTHEWct4",
  authDomain: "varicosescan-4c766.firebaseapp.com",
  projectId: "varicosescan-4c766",
  storageBucket: "varicosescan-4c766.firebasestorage.app",
  messagingSenderId: "516457802009",
  appId: "1:516457802009:web:372848ec27049515987d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
