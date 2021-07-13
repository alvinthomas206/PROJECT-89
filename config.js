import firebase from 'firebase' ;
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAbC2uPcUhxOSrCYnSL3kf0bdAJrXsyig4",
    authDomain: "barter-2c505.firebaseapp.com",
    projectId: "barter-2c505",
    storageBucket: "barter-2c505.appspot.com",
    messagingSenderId: "447936024092",
    appId: "1:447936024092:web:23123b1425a669ec7ad9d9"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();
