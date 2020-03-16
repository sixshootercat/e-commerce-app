import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAFQQQ8mjB_Kk1dbx-y3M-2uFCDtcr6FDc",
  authDomain: "crown-e-commerce.firebaseapp.com",
  databaseURL: "https://crown-e-commerce.firebaseio.com",
  projectId: "crown-e-commerce",
  storageBucket: "crown-e-commerce.appspot.com",
  messagingSenderId: "4035693984",
  appId: "1:4035693984:web:ad3cf71a60704cff8568c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
