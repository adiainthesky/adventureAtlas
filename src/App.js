import React from "react";
import './App.css';
import Map from "./comps/map/Map";
import TripForm from "./oldTripUpload/TripForm";
import SignUp from "./comps/signUp/SignUp";
import TripUpload from "./comps/tripUpload/TripUpload";
import TripDisplay from "./comps/tripDisplay/OLDTripDisplay";
import Sidebar from "./comps/sidebar/Sidebar";
import SideAndModal from "./comps/sidebar/SideAndModal";
import InfoModal from "./comps/sidebar/InfoModal";
import BasicModal from "./comps/sidebar/BasicModal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {

  return (
    <div>
      {/* <SignUp /> */}
      <SideAndModal />
      {/* <Sidebar /> */}
      <Map />
      {/* <InfoModal /> */}
      {/* <BasicModal /> */}
      {/* <TripUpload /> */}
      {/* <TripDisplay /> */}
    </div>
    
  );  
}





