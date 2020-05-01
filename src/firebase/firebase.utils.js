import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAFQQQ8mjB_Kk1dbx-y3M-2uFCDtcr6FDc',
  authDomain: 'crown-e-commerce.firebaseapp.com',
  databaseURL: 'https://crown-e-commerce.firebaseio.com',
  projectId: 'crown-e-commerce',
  storageBucket: 'crown-e-commerce.appspot.com',
  messagingSenderId: '4035693984',
  appId: '1:4035693984:web:ad3cf71a60704cff8568c5',
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
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

// Function to add documents to firestore db to not do it manually
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnaphot) => {
    const { title, items } = docSnaphot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnaphot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
