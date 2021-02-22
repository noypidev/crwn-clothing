import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyDWyQR0-Z97G319vu3RL5E8S2rZa80I8T4',
   authDomain: 'crwn-clothing-6c936.firebaseapp.com',
   projectId: 'crwn-clothing-6c936',
   storageBucket: 'crwn-clothing-6c936.appspot.com',
   messagingSenderId: '801095863210',
   appId: '1:801095863210:web:a9aa1b53a3619f9884b9d3',
   measurementId: 'G-2FCW72NMCX',
};

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
            ...additionalData,
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
