import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBSwe5LobNHRhkd5FeM-D6ZJotdotBWYQ0",
    authDomain: "retail-store-db.firebaseapp.com",
    projectId: "retail-store-db",
    storageBucket: "retail-store-db.appspot.com",
    messagingSenderId: "201197060121",
    appId: "1:201197060121:web:6a34590e9494567aba2a88"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);

    if (!(userSnapshot.exists())) {
        const { displayName, email } = userAuth;
        const createdDate = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdDate });
        } catch (error) {
            console.log('unable to created user' + error);
        }
    }

    return userDocRef;
};