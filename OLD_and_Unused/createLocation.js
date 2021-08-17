// import { db } from '../../firebase/config.js'
// import React, { useState } from 'react'

// const createLocation = (lat, long) => {
//     db.collection('trips')
//     .add({
//         lat: lat,
//         long: long,
//     })
//     .then(() => {
//         alert('Your location has been added!');
//         setLoader(false);
//     })
//     .catch(error => {
//         alert(error.message);
//         setLoader(false);
//     });
    
// }
// } 




// const uploadTripToDB = ( tripData, setLoader ) => {
//     const { tripName, location, description, url } = tripData
//     db.collection('trips')
//     .add({
//         tripName: tripName,
//         location: location,
//         description: description,
//         photo: url,
//     })
//     .then(() => {
//         alert('Your trip has been submitted!');
//         setLoader(false);
//     })
//     .catch(error => {
//         alert(error.message);
//         setLoader(false);
//     });
    
// }