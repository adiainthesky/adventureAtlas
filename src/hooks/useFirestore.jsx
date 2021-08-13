// import { UnsupportedMediaType } from 'http-errors';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        // unsub = unsubscribe => to stop listening to this collection (ie, if we want to unmount from imgGrid)
        // const unsub = db.collection(collection)
        db.collection(collection)
            // .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            })
        // this is a 'clean-up method' (unsubscribing from teh collection when we no longer need it)    
        // return () => unsub();

        // const fetchLoctions=async()=>{
        //     const response=db.collection(collection);
        //     const data=await response.get();
        //     data.docs.forEach(item=>{
        //     setDocs([...docs,item.data()])
        //     })
        // }    
        // fetchLoctions()


    }, [collection])
    return { docs };
}

export default useFirestore



// const TripDisplay = () => {
//     return firebase
//     .firestore()
//     .collection("trips")
//     .get()
//     .then(function(querySnapshot){
//         querySnapshot.forEach(function(doc) {
//             let newData = doc.data();
//             TripDisplay.indexOf(newData.id) {
//                 setTrips((arr) => {
//                     return [...arr,newData]
//                 })
//             }    
//         }
//     })
//     .catch()
// };