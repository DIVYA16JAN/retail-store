import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSwe5LobNHRhkd5FeM-D6ZJotdotBWYQ0",
  authDomain: "retail-store-db.firebaseapp.com",
  projectId: "retail-store-db",
  storageBucket: "retail-store-db.appspot.com",
  messagingSenderId: "201197060121",
  appId: "1:201197060121:web:6a34590e9494567aba2a88",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = new getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("unable to created user" + error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};