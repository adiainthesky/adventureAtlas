import React, { useState } from 'react'
import './App.css';
import Map from "./comps/map/Map";
import SideAndModal from "./comps/sidebar/SideAndModal";
import Messages from './comps/Messages/Messages';
import Welcome from './comps/Messages/Welcome';

export default function App() {

const [welcome, setWelcome] = useState(true);
const [message, setMessage] = useState("");  
const [userID, setuserID] = useState(null);
const setID = (id) => {setuserID(id)}

  return (
    <div>
      {welcome && <Welcome setWelcome={setWelcome}/>}
      <Messages message={message}/>
      <SideAndModal setID={setID} userID={userID}/>
      <Map userID={userID} setMessage={setMessage} setWelcome={setWelcome}/>
    </div>   
  );  
}