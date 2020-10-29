import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA2qAIaclEzhUpv84FS68rfuFNGcRqRJaU",
    authDomain: "crwn-db-8c9f8.firebaseapp.com",
    databaseURL: "https://crwn-db-8c9f8.firebaseio.com",
    projectId: "crwn-db-8c9f8",
    storageBucket: "crwn-db-8c9f8.appspot.com",
    messagingSenderId: "1073679290605",
    appId: "1:1073679290605:web:3bcbadfee5cf684876fce4",
    measurementId: "G-HRQ486P2VW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;