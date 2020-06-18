import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCqA1cNseS7tLp2KswfryfsizJGJc1_STI",
    authDomain: "react-ecommerce-6b59a.firebaseapp.com",
    databaseURL: "https://react-ecommerce-6b59a.firebaseio.com",
    projectId: "react-ecommerce-6b59a",
    storageBucket: "react-ecommerce-6b59a.appspot.com",
    messagingSenderId: "591795408687",
    appId: "1:591795408687:web:cc754ffce7ffef5a125bda",
    measurementId: "G-17S3Q1YBB2"
};

export const createUserProfiledocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

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
            })
        } catch (error) {
            console.log('error creating user:',error);
        }
    }
    // console.log("snapshot",snapShot)
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;