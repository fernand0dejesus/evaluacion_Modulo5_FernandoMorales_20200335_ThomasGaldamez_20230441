import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Tu configuración de Firebase aquí
  apiKey: "tu-api-key",
  authDomain: "tu-project.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);