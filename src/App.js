import React, { useState } from 'react'
import './App.css';
import Map from "./comps/map/Map";
import SignUp from "./comps/signUp/SignUp";
import TripUpload from "./comps/tripUpload/TripUpload";
import Sidebar from "./comps/sidebar/Sidebar";
import SideAndModal from "./comps/sidebar/SideAndModal";
import InfoModal from "./comps/sidebar/InfoModal";
import BasicModal from "./comps/sidebar/BasicModal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {

const [userID, setuserID] = useState(null);
const setID = (id) => {setuserID(id)}

  console.log(userID)
  return (
    <div>
      {/* <SignUp /> */}
      <SideAndModal setID={setID}/>
      {/* <Sidebar /> */}
      {/* <Map /> */}
      <Map userID={userID}/>
      {/* <InfoModal /> */}
      {/* <BasicModal /> */}
      {/* <TripUpload /> */}
      {/* <TripDisplay /> */}
    </div>
    
  );  
}





