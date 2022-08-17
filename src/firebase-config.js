import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAA1-IB-tYynqi2rV7Oa8zBebhlcJ2F1yM",
    authDomain: "help-for-travelers-users.firebaseapp.com",
    projectId: "help-for-travelers-users",
    storageBucket: "help-for-travelers-users.appspot.com",
    messagingSenderId: "625966511376",
    appId: "1:625966511376:web:d41bb47acfc3ba8b90a195",
    measurementId: "G-LJ363GMBK9"
};

const app= initializeApp(firebaseConfig)

export const auth = getAuth(app)