// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqbuE4-1BGsEEMvvFpJRKMzf9Ny9ATtmk",
  authDomain: "maiti-app.firebaseapp.com",
  projectId: "maiti-app",
  storageBucket: "maiti-app.appspot.com",
  messagingSenderId: "793471801251",
  appId: "1:793471801251:web:3daf61a931fee9f3b76c16",
  measurementId: "G-FVCR8R0800"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)