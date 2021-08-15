import React, { useState } from 'react'
import BasicModal from './BasicModal';
import Sidebar from './Sidebar';


const SideAndModal = () => {
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            {/* {modalState ? <BasicModal /> : ""} */}
            <BasicModal />
            <Sidebar onClick={toggleModalState}/>
        </div>
    )
}

export default SideAndModal
