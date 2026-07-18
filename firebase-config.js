// Shared Firebase initialization for abrarimtiyaz.in
// Loaded as a module by index.html, admin.html, and seed.html

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  initializeFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc,
  updateDoc, deleteDoc, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXohlOUB5NelC8TQzy3cm-frC8ZsBPNGY",
  authDomain: "abrarimtiyaz-portfolio.firebaseapp.com",
  projectId: "abrarimtiyaz-portfolio",
  storageBucket: "abrarimtiyaz-portfolio.firebasestorage.app",
  messagingSenderId: "644822822938",
  appId: "1:644822822938:web:a2a456b344fa9779dd21a3"
};

const app = initializeApp(firebaseConfig);

// experimentalAutoDetectLongPolling: works around Safari's tracking prevention
// and ad-blockers that silently break Firestore's default WebChannel connection.
// Third argument "default" targets the actual named database (not the implicit "(default)").
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false
}, "default");
export const auth = getAuth(app);

export {
  collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc,
  query, orderBy, signInWithEmailAndPassword, onAuthStateChanged, signOut
};
