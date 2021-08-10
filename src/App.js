import React from "react";
import { Icon } from "leaflet";
// import * as fauxData from "./data/fauxData.json";
// import * as parkData from "./data/fauxData.json";
import './App.css';
import Map from "./comps/Map";


export const thumbtack = new Icon({
  iconUrl: "/simple-luggage.svg",
  iconSize: [35, 35]
});

export default function App() {

  return (
    <Map />
  );  
}





