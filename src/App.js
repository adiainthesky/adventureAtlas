import React, { useState } from 'react'
import './App.css';
import Map from "./comps/map/Map";
import SignUp from "./comps/loginLogout/SignUp";
import TripUpload from "./comps/tripUpload/TripUpload";
import Sidebar from "./comps/sidebar/Sidebar";
import SideAndModal from "./comps/sidebar/SideAndModal";
import InfoModal from "./comps/sidebar/InfoModal";
import BasicModal from "./comps/sidebar/BasicModal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from './comps/Messages/Messages';
import Welcome from './comps/Welcome/Welcome';


export default function App() {

const [welcome, setWelcome] = useState(true);
const [message, setMessage] = useState("");  
const [userID, setuserID] = useState(null);
const setID = (id) => {setuserID(id)}


  console.log(userID)
  return (
    <div>
      {/* <SignUp /> */}
      {welcome && <Welcome setWelcome={setWelcome}/>}
      <Messages message={message}/>
      <SideAndModal setID={setID} userID={userID}/>
      {/* <h1> Welcome to the Adventure Atlas!</h1> */}
      {/* <Sidebar /> */}
      {/* <Map /> */}
      <Map userID={userID} setMessage={setMessage} setWelcome={setWelcome}/>
      {/* <InfoModal /> */}
      {/* <BasicModal /> */}
      {/* <TripUpload /> */}
      {/* <TripDisplay /> */}
    </div>
    
  );  
}





