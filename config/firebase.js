// config/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuVAlM9IpQS7rf-oxtS3mxtMe6UVTlg-M",
  authDomain: "practica-firebase-20230441.firebaseapp.com",
  projectId: "practica-firebase-20230441",
  storageBucket: "practica-firebase-20230441.firebasestorage.app",
  messagingSenderId: "467583506411",
  appId: "1:467583506411:web:b0cb5974b2535865b62bae"
};

const app = initializeApp(firebaseConfig);

// 🔹 Inicializa Auth con persistencia
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
console.log("Firebase conectado:", app.name);
