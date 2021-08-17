// import React, { useEffect } from 'react';
// import useStorage from  '../../hooks/useStorage';
// import { motion } from 'framer-motion';

// const ProgressBar = ({ photo, setPhoto }) => {
//     const { progress, url } = useStorage(photo);


//     useEffect(() => {
//         if (url) {
//             setPhoto(null);
//         }
//         // ????why do i need to pass in the the setPhoto????
//     }, [url, setPhoto]);

//     return (
//         // <div className="progress-bar" style={{ width: progress + '%' }}>progress...</div>
//         <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: progress + '%' }}></motion.div>
//     )
// }

// export default ProgressBar
