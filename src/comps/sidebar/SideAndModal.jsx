import React, { useState } from 'react'
import BasicModal from './BasicModal';
import Sidebar from './Sidebar';


const SideAndModal = ({setID}) => {
    
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            {/* {modalState ? <BasicModal /> : ""} */}
            <BasicModal setID={setID}/>
            <Sidebar activateModal={toggleModalState}/>
        </div>
    )
}

export default SideAndModal
