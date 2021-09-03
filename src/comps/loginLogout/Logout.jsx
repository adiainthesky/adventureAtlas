import React from 'react'
import './loginLogout.css'

const Logout = ({handleLogout}) => {
    return (
        <section className="logout">
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default Logout;
