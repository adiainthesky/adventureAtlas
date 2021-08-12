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

const TripDisplay = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
        {docs && docs.map(doc => (
            // adding 'motion' in front of the .div (in opening AND closing tags) is how i turn 
            // an element into a motion element    
            <motion.div className="img-wrap" key={doc.id} 
                // motion attribute that animates the movement of a layout change (here it will 
                // be applied to when a new photo is added and they readjust position)
                layout
                // this is a motion attribute:
                whileHover={{ opacity: 1 }}s
                onClick={() => setSelectedImg(doc.url)}
            >
                <motion.img src={doc.url} alt="uploaded pic"
                    // animation effect to delay and fade-in when a new photo is uploaded:
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </motion.div>
        ))}
    </div>
    )
}

export default TripDisplay;