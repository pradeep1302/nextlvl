import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nextlvl-47cd8.firebaseapp.com",
  projectId: "nextlvl-47cd8",
  storageBucket: "nextlvl-47cd8.appspot.com",
  messagingSenderId: "253679728518",
  appId: "1:253679728518:web:c96da9087e7cdbbeff5e07",
};


export const app = initializeApp(firebaseConfig);
