import React, { useEffect, useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';



const TripDisplay = ({trips, id}) => {
    const docs = trips
    // const { docs } = useFirestore('trips');
    const selectedDoc = docs.filter(doc => doc["id"] === id) 

    return (
        <div className="display">
            {/* <div className="tripPhoto"> */}
            <motion.img width={300} src={selectedDoc["0"]["photo"]} alt="uploaded pic"
            // animation effect to delay and fade-in when a new photo is uploaded:
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            />
            <h2> Trip Name: </h2>
                { selectedDoc["0"]["tripName"] }
            <h2> Trip Location: </h2>
                { selectedDoc["0"]["location"] }
            <h2> Trip Description: </h2>
                { selectedDoc["0"]["description"] }
        </div>
    )
}

export default TripDisplay;


// THIS WORKS!!!!
// import React, { useEffect, useState } from 'react';
// import useFirestore from '../../hooks/useFirestore';
// import { motion } from 'framer-motion';

// const TripDisplay = ({trips, id}) => {
//     const docs = trips
//     // const { docs } = useFirestore('trips');
//     const selectedDoc = docs.filter(doc => doc["id"] === id) 

//     return (
//         <div className="display">
//             {/* <div className="tripPhoto"> */}
//             <motion.img width={300} src={selectedDoc["0"]["photo"]} alt="uploaded pic"
//             // animation effect to delay and fade-in when a new photo is uploaded:
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             />
//             <h2> Trip Name: </h2>
//                 { selectedDoc["0"]["tripName"] }
//             <h2> Trip Location: </h2>
//                 { selectedDoc["0"]["location"] }
//             <h2> Trip Description: </h2>
//                 { selectedDoc["0"]["description"] }
//         </div>
//     )
// }

// export default TripDisplay;