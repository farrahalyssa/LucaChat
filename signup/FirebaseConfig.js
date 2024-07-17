// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3cQ4YlBiA9b_3WvaoQra9MbrHWdlbtE",
  authDomain: "lucas-bbd0e.firebaseapp.com",
  projectId: "lucas-bbd0e",
  storageBucket: "lucas-bbd0e.appspot.com",
  messagingSenderId: "647973677212",
  appId: "1:647973677212:web:f33b6d568e07864d31e559",
  measurementId: "G-V7TS5HHDH4"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });