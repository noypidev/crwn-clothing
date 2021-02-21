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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
