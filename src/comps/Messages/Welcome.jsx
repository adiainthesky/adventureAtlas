import React, { useState } from 'react'
import './Messages.css'

const Welcome = () => {
    
    const [welcomeState, setWelcomeState] = useState(true);
    const toggleWelcomeState = () => setWelcomeState(false)

    return (
        <div className='welcomeComponent'>
            <div  className={`welcomeBackground welcomeShowing-${welcomeState}`} onClick={()=>toggleWelcomeState(false)}>
                <p className="welcome">
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
