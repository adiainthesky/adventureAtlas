import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBh9juNL7wta6pe-Sv8eW7LJe3s7qv-6bw",
    authDomain: "geopics2.firebaseapp.com",
    projectId: "geopics2",
    storageBucket: "geopics2.appspot.com",
    messagingSenderId: "1041424168508",
    ppId: "1:1041424168508:web:432c49af231e969ff4b539"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// // Your web app's Firebase configuration
// var firebaseConfig = {
// apiKey: "AIzaSyAUr1C7y-VMMLlfGeOvATNk-EWwCxfMoao",
// authDomain: "geopicslive.firebaseapp.com",
// projectId: "geopicslive",
// storageBucket: "geopicslive.appspot.com",
// messagingSenderId: "1000797976567",
// appId: "1:1000797976567:web:4caa4fc414ed40098660f2"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };