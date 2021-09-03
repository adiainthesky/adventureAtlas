import React, { useState } from 'react'
import BasicModal from './BasicModal';
import Sidebar from './Sidebar';


const SideAndModal = ({setID, userID}) => {
    
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            <BasicModal setID={setID} userID={userID}/>
            <Sidebar activateModal={toggleModalState}/>
        </div>
    )
}

export default SideAndModal
