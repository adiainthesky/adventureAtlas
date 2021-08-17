import React from 'react'
import './loginLogout.css'

const Logout = ({handleLogout}) => {
    return (
        <section className="logout">
            {/* <nav> */}
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
            {/* </nav> */}
        </section>
    )
}

export default Logout;
