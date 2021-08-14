import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: "Info",
        icon: <AiIcons.AiFillHome />,
        // iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
        className: 'side-text',
        insideDropdown: "all the info about the page will go here...."
    },
    {
        title: "Sharing",
        icon: <IoIcons.IoMdPeople />,
        className: 'side-text',
        insideDropdown: "all the info about the sharing will go here...."
    },
    {
        title: "Responsible travel",
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'side-text',
        insideDropdown: "all the info about the responsible travel will go here...."
    }
]