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

    return (
        <div className='info-area'>    
            {/* this allows me to customize all icons at once */}
            <IconContext.Provider  value={{ color: '#8cac5d'}}>
                <div className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <div className='info-icon' onClick={showSidebar}>info</div>
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
                    {/* <InfoModal /> */}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Sidebar
