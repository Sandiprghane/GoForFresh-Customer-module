import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA19K144TeTqXcVfWOArNJ6HVIeVi14E0M",
  authDomain: "gofreshcustomer-510a7.firebaseapp.com",
  databaseURL: "https://gofreshcustomer-510a7.firebaseio.com",
  projectId: "gofreshcustomer-510a7",
  storageBucket: "gofreshcustomer-510a7.appspot.com",
  messagingSenderId: "495801918775",
  appId: "1:495801918775:web:df60f6b983d883538e66b2",
  measurementId: "G-TFXV9EML31"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
