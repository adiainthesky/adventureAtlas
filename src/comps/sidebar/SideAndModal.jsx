import React, { useState } from 'react'
import BasicModal from './BasicModal';
import Sidebar from './Sidebar';


const SideAndModal = ({setID, userID}) => {
    
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            {/* {modalState ? <BasicModal /> : ""} */}
            <BasicModal setID={setID} userID={userID}/>
            {/* <h1> Welcome to the Adventure Atlas!</h1> */}
            <Sidebar activateModal={toggleModalState}/>
        </div>
    )
}

export default SideAndModal
