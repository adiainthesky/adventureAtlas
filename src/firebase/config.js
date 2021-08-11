import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh9juNL7wta6pe-Sv8eW7LJe3s7qv-6bw",
    authDomain: "geopics2.firebaseapp.com",
    projectId: "geopics2",
    storageBucket: "geopics2.appspot.com",
    messagingSenderId: "1041424168508",
    ppId: "1:1041424168508:web:432c49af231e969ff4b539"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();


const projectStorage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, db, timestamp };

// // Rest from another tutorial
// class Firebase{
//     constructor(){
//         firebase.initializeApp(FirebaseConfig);
//         this.auth = firebase.auth();
//         this.firestore = firebase.firestore();
//     }

//     async signin(email, password){
//         const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch( err => {
//             console.log(err);
//         });
//     }
//     async login(email, password){
//         const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch( err => {
//             console.log(err);
//         });
//         return user;
//     }

//     async logout(){
//         await firebase.auth().signOut().catch(err => {
//             console.log(err);
//         });
//     }    
// }

// export default new Firebase();