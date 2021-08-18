import React from 'react'

const Welcome = ({setWelcome}) => {
    return (
        <p className="welcome" onClick={()=>setWelcome(false)}>
            Adventure Atlas!
        </p>
    )
}

export default Welcome
