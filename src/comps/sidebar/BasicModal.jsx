import React, { useState, useEffect, useRef } from 'react'
import SignUp from '../loginLogout/SignUp';
import './BasicModal.css'

const BasicModal = ({setID, userID}) => {
    
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    // setting and using the useRef() lets me identify the container, which i can then use to say 
    const menuRef = useRef()

    useEffect(() => {
        if (!menuRef.current) {
            return
        }
        document.addEventListener("mousedown", (e) => {
            if (!menuRef.current.contains(e.target))
            setModalState(false)
        });
    });

    return (
        <div className='signInModalComponent'>
            <div  className={`signInModalBackground modalShowing-${modalState}`}>
                <div ref={menuRef} className="signInModalInner">
                    <SignUp setID={setID} setModalState={setModalState}/>
                </div>
            </div>
            <div className="loginLogout" onClick={() => toggleModalState()}>
                {userID ? "Logout": "Login to add your adventures!"
                }
                </div>
        </div>
    )
}

export default BasicModal

