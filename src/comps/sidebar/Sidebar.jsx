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
                            <div className='menu-bars'>
                                {/* got below icon from 'https://react-icons.github.io/' then imported above' */}
                                {/* <CgIcons.CgCloseR classname='sideBarCloser'/> */}
                                <CgIcons.CgCloseR size={15} color={'darkgreen'} margin={0}/>
                            </div>
                        </div>
                        <p className="aboutText">Flee in terror at cucumber discovered on floor gnaw the corn cob. Man running from cops stops to pet cats, goes to jail prance along on top of the garden fence, annoy the neighbor's dog and make it bark rub butt on table or meow meow mama. Steal the warm chair right after you get up walk on keyboard or twitch tail in permanent irritation scratch the box rub whiskers on bare skin act innocent but hate dogs. Kitty loves pigs meowing chowing and wowing. Scratch so owner bleeds purr purr purr until owner pets why owner not pet me hiss scratch meow yet meow loudly just to annoy owners. Mark territory under the bed cats are a queer kind of folk. Weigh eight pounds but take up a full-size bed get suspicious of own shadow then go play with toilette paper yet hate dogs get scared by doggo also cucumerro , and meow all night steal mom's crouton while she is in the bathroom so favor packaging over toy. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life steal mom's crouton while she is in the bathroom instead of drinking water from the cat bowl, make sure to steal water from the toilet and rub butt on table yet purr while eating. Cat mojo chase laser but walk on a keyboard and why must they do that. Run at 3am then cats take over the world. Kitty kitty roll over and sun my belly but groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now eat my own ears and nap all day, yet jump around on couch, meow constantly until given food, , for scratch at the door then walk away.
</p>
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
