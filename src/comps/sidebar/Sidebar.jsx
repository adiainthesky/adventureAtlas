import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData'
import { IoLogoSteam } from 'react-icons/io';
import { SidebarData } from './SidebarData';
import './Sidebar.css'
import { IconCentext } from 'react-icons'
import { IconContext } from 'react-icons/lib';
import InfoModal from './InfoModal';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    
    // const [modalState, setModalState] = useState(false);
    // const toggleModalState = () => setModalState(!modalState)


    return (
        // this allows me to customize all icons at once
        <div>
        <IconContext.Provider value={{ color: 'purple' }}>
            <div className="info-click">
                <div className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <div className='info-icon' onClick={showSidebar}>info</div>
                </div>
            </div>
            {/* if the sidebar is selected, the classsName will be 'nav-menu active' (meaning its showing),
            or 'nav-menu', which means its hidden */}
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                    <li className="closer">
                        <div className='menu-bars'>
                            {/* got below icon from 'https://react-icons.github.io/' then imported above' */}
                            <CgIcons.CgCloseR size={30}/>
                        </div>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <div>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div> 
                            </li>
                        )
                    })}
                {/* <div className={`modalBackground modalShowing-${modalState}`}>
                    <div className="modalInner">
                        <div className="modalImage">
                            <img src="https://images.unsplash.com/photo-1628802882005-68aedd740df1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="open suitcase" />
                        </div>
                        <div className="modalText">
                            <h2>Information about the site</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam modi delectus vero nostrum accusantium perspiciatis atque ad aliquid incidunt a corrupti quo quam necessitatibus enim saepe, corporis iure consectetur neque? </p>
                            <form action="">
                                <button>Unnecessary button</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button onClick={() => toggleModalState()}>Open modal</button> */}
                <InfoModal />
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    )
}

export default Sidebar
