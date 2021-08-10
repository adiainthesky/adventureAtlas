  
import React from 'react';
import { motion } from 'framer-motion';

const FrontImg = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        // this line is making sure that it only fires if you click on backdrop, and NOT if you click on
        // the photo, which is inside the backdrop div BUT doesnt have the className of 'backdrop' itself. 
        // if we just had the line after this one, even clicking on photo would close the pop-out    
        if (e.target.classList.contains('backdrop')) {
        setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        <motion.img src={selectedImg} alt="enlarged pic" 
        // off-set for y-axis (vertical), meaning starts above the viewport height and animates it down to center
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
        />
        </motion.div>
    )
}

export default FrontImg;
