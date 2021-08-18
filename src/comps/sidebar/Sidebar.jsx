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
import { luggage, plant, tea } from '../map/Map';


const Sidebar = ({activateModal}) => {
    const [infoState, setInfoState] = useState(false);
    const toggleInfo = () => setInfoState(!infoState)

    return (
        <div  className={`infoBackground infoShowing-${infoState}`}>
        <div className='info-area'>    
            {/* this allows me to customize all icons at once */}
            <IconContext.Provider  value={{ color: '#8cac5d'}}>
                <div className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={toggleInfo} /> */}
                    <div className='info-icon' onClick={toggleInfo}>info</div>
                </div>
                {/* if the infoState is selected, the classsName will be 'nav-menu active' (meaning its showing),
                or 'nav-menu', which means its hidden */}
                <nav className={infoState ? 'side-menu active' : 'side-menu'}>
                    <div className='side-menu-items' onClick={toggleInfo}>
                    {/* <div className='side-menu-items'> */}
                        <div className="closer">
                                {/* got below icon from 'https://react-icons.github.io/' then imported above' */}
                                {/* <CgIcons.CgCloseR classname='sideBarCloser'/> */}
                                <CgIcons.CgCloseR size={15} color={'#f3a33'} margin={0}/>
                        </div>
                        <text className="sideTextTitle">Welcome to Adventure Atlas, a place where we share visual and written snapshots taken from explorations around our amazing planet!</text>  
                        <br />
                        <text className="sideText">
                        Spend some time clicking on the map icons to learn more about fellow traveler’s tales. 
                        </text>
                        <text className="sideTextIcon">
                        <br />
                        ☕ = “cultural” experiences.  These could range anywhere from dancing to Vallenato on the beach in Baranquilla, Colombia, to sipping chai in a hip cafe in Mumbai, to visiting the ruins of Angkor Wat.
                        <br />
                        🌴 = “nature” experience.  These include things like kayaking trips down the Colorado river, volunteering with injured manatees in Belize, or having a picnic in the forest in Bulgaria.  
                        <br />
                        🧳 = general, uncategorized experiences and can represent the gamut of travel adventures. 
                        <br />
                        <br />
                        </text>
                        <text className="sideText">
                        If you would like to share some travels of your own, please signup and login at the bottom left! 
                        <br />
                        </text>
                        <text className="sideTextTitle">
                        <br />
                        Happy virtual travels! 
                        </text>
                        
                        {/* {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className} onClick={activateModal}>
                                    <div>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div> 
                                </li>
                            )
                        })} */}
                    {/* <InfoModal /> */}
                    </div>
                </nav>
            </IconContext.Provider>
        </div>
        </div>
    )
}

export default Sidebar
