// // import { UnsupportedMediaType } from 'http-errors';
// import { useState, useEffect } from 'react';
// import { db } from '../firebase/config';



// const useOneDoc = (collection) => {
//     var docRef = db.collection("cities").doc("SF");

//     docRef.get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
//     return { doc };
// }

// export default useOneDoc








// const useOneDoc = (collection) => {
//     const [docs, setDocs] = useState([]);

//     useEffect(() => {
//         // unsub = unsubscribe => to stop listening to this collection (ie, if we want to unmount from imgGrid)
//         // const unsub = db.collection(collection)
//         db.collection(collection)
//             // .orderBy('createdAt', 'desc')
//             .onSnapshot((snap) => {
//                 let documents = [];
//                 console.log("^^^^^^^^^^^^^^^^^^^^^^")
//                 snap.forEach(doc => {
//                     console.log("$$$$$$$$$$$$$$$$$$$$$$$$")
//                     documents.push({...doc.data(), id: doc.id});
//                 });
//                 setDocs(documents);
//             })



//     }, [collection])

//     return { docs };
// }

// export default useOneDoc