import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: 'AIzaSyA5iI0pEdUVRFRzF1wNirs7FKOC9VCIjEU',
//    authDomain: 'imisi-data.firebaseapp.com',
//    projectId: 'imisi-data',
//    storageBucket: 'imisi-data.appspot.com',
//    messagingSenderId: '167473842428',
//    appId: '1:167473842428:web:78f4ec34b4d2892ff8af79',
// };
const firebaseConfig = {

   apiKey: "AIzaSyB2lwNPB9AL-Wdp-LG9CMjglkdfSgIkqrs",
 
   authDomain: "inspire-9a9b0.firebaseapp.com",
 
   projectId: "inspire-9a9b0",
 
   storageBucket: "inspire-9a9b0.appspot.com",
 
   messagingSenderId: "271531895343",
 
   appId: "1:271531895343:web:92805f9af3c3c31af9b4da",
 
   measurementId: "G-4G4VENNSR3"
 
 };
 
 

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, storage }; // Export both Firestore and Firebase Storage instances
