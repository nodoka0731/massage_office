// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBo0AsnNlX9hvVt4RcKLZC8PoEDJTYiDpg",
  authDomain: "massage-office.firebaseapp.com",
  projectId: "massage-office",
  storageBucket: "massage-office.appspot.com",
  messagingSenderId: "868403640666",
  appId: "1:868403640666:web:de494e934933866f305b63",
  measurementId: "G-XLBTN4E6SK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);