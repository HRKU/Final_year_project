import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA0FFQ8p9DEMpTLrR8crn-9UquMO8kVKsg",
    authDomain: "vert-farming.firebaseapp.com",
    projectId: "vert-farming",
    storageBucket: "vert-farming.appspot.com",
    messagingSenderId: "635610037512",
    appId: "1:635610037512:web:f6e1bb4fece8004b75c0bd"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
