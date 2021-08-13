// import React from 'react'

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

// export default TripDisplay




import React, { useEffect, useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';


const TripDisplay = ({trips, id}) => {
    const docs = trips
    // const { docs } = useFirestore('trips');
    // console.log(docs)
    // const selectedDoc = docs[0]
    // const selectedDoc = docs ? docs.filter(doc => doc["id"] === tripID) : "Not done loading yet" 
    const selectedDoc = docs.filter(doc => doc["id"] === id) 
    // const [trips, setTrips] = useState([])

    // useEffect(() => {
    //     const docs = useFirestore('trips'); 
    //     setTrips(docs);
    //     }, [])

    { console.log("$$$$$$$$$$$$$$$$", selectedDoc)}
    return (
        <div className="display">
                    <div className="tripName">
                    {/* { console.log("TRIP IS DISPLAYING") }  */}
                    {/* { console.log(selectedDoc.id) }  */}
                    {/* { console.log(tripID) }  */}
                        { selectedDoc["0"]["tripName"] }
                    </div>    
        </div>
    )
}

export default TripDisplay;


