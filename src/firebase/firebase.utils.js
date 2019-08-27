import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqysnQGz_TTwqdm0TsAWEpjoTOEZPT4sM",
    authDomain: "dark-demo-123.firebaseapp.com",
    databaseURL: "https://dark-demo-123.firebaseio.com",
    projectId: "dark-demo-123",
    storageBucket: "",
    messagingSenderId: "833185456521",
    appId: "1:833185456521:web:2869d82e18250849"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//create User Profile Document
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// set up authentication with GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
