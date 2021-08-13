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




import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

const TripDisplay = () => {
    const { docs } = useFirestore('trips');
    // console.log(docs)

        return (
        <div className="display">
            {/* <div className="photo">
                { photo } */}
            {/* </div>     */}
            {/* </div> */}
            {docs && docs.map(doc => (
            <div className="container">
                <div className="tripName">
                    { doc.tripName }
                </div>    
                {/* <div className="photo">
                    <img src={doc.photo} alt="uploaded pic" /> */} 
                {/* </div>
                <div className="description">
                    { doc.description }
                </div>   */}
            </div>
            ))}
        </div>
    )
}

export default TripDisplay;


