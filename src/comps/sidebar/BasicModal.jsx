import React, { useState, useEffect, useRef } from 'react'
import SignUp from '../signUp/SignUp';
import './BasicModal.css'

const BasicModal = ({setID}) => {
    
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
                    {/* <h2>Basicrmation about the site</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam modi delectus vero nostrum accusantium perspiciatis atque ad aliquid incidunt a corrupti quo quam necessitatibus enim saepe, corporis iure consectetur neque? </p> */}
                    <SignUp setID={setID}/>
                </div>
            </div>
            {/* <button className="loginLogout" onClick={() => toggleModalState()}>Login/Logout</button> */}
            <div className="loginLogout" onClick={() => toggleModalState()}>Login/Logout</div>
        </div>
    )
}

export default BasicModal

