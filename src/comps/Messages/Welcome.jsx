import React, { useState, useEffect, useRef } from 'react'
import './Messages.css'

const Welcome = () => {
    
    const [welcomeState, setWelcomeState] = useState(true);
    const toggleWelcomeState = () => setWelcomeState(!welcomeState)

    // setting and using the useRef() lets me identify the container, which i can then use to say 
    const menuRef = useRef()

    useEffect(() => {
        if (!menuRef.current) {
            return
        }
        document.addEventListener("mousedown", (e) => {
            if (!menuRef.current.contains(e.target))
            setWelcomeState(false)
        });
    });

    return (
        <div className='welcomeComponent'>
            <div  className={`welcomeBackground welcomeShowing-${welcomeState}`}>
                <p className="welcome" onClick={()=>toggleWelcomeState(false)}>
                    Adventure Atlas!
                </p>
            </div>
        </div>
    )
}

export default Welcome














// const Welcome = ({setWelcome}) => {

//     const [welcomeState, setWelcomeState] = useState(true);
//     const toggleWelcomeState = () => setWelcomeState(!welcomeState)


//     return (
//         <div  className={`welcomeBackground welcomeShowing-${welcomeState}`}>
//             <p className="welcome" onClick={()=>setWelcome(false)}>
//                 Adventure Atlas!
//             </p>
//         </div>
//     )
// }

// export default Welcome
