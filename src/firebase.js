import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBixBlfSPZFkvK77FG6eQ7ASI-0gNALXh8",
    authDomain: "nutrafunnels-bda17.firebaseapp.com",
    projectId: "nutrafunnels-bda17",
    storageBucket: "nutrafunnels-bda17.appspot.com",
    messagingSenderId: "1027803236380",
    appId: "1:1027803236380:web:48108b904f1a74199ab7d9",
    measurementId: "G-0XKZLPBZC1"
  };

export  const app = initializeApp(firebaseConfig);