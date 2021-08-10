import React from "react";
import { MapContainer, useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as fauxData from "./data/fauxData.json";
// import * as parkData from "./data/fauxData.json";
import './App.css';
import { MapClickHandler } from "./components/MapClickHandler";
import TripForm from "./components/TripForm";
import ImgUpload from "./components/ImgUpload";
import {useForm} from 'react-hook-form';

export const thumbtack = new Icon({
  iconUrl: "/simple-luggage.svg",
  iconSize: [35, 35]
});

export default function App() {
  //don;t think im even using this at this point
  const [activeLocation, setActiveLocation] = React.useState(null);
  const [features, setFeatures] = React.useState(fauxData.features);

  const url = 'https://storage.googleapis.com/geophotoalbum.appspot.com/tommy'


  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <MapClickHandler onClick={ (event)=> {
        console.log("hello")
        const nextFeatures = [...features, {geometry: {coordinates: [event.latlng.lng, event.latlng.lat]}, properties: {NAME: "new name", DESCRIPTIO: "new description"}} ]
        setFeatures(nextFeatures)
        //call API to update features, and if not successful, reset the setFeastures we just called BACK to what it was b4 
        //warning: if you click 3 times fast and last not successful, it dangerous.  Sara can send me notes since this is apparently a very common pattern (called "eagerly updating the UI", as opposed to "lazily" updating UI)
      }}/>
      <TileLayer
          //basic map   
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //good for coloring map
          // url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          //natGeo map
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
          contributors'
        />

        {features.map(location => (
          <Marker
            key={location.properties.PARK_ID}
            position={[
              //their lat/long is in reverse order so below the [1] comes before the [0]
              location.geometry.coordinates[1],
              location.geometry.coordinates[0]
            ]}
            //  //apparently this is not needed, as the marker handles it automatically!
            // onClick={() => {
            //   setActiveLocation(location);
            //   console.log({location})
            // }}
            icon={thumbtack}
          >
          <Popup
        //like a location, popups need to know their location
          position={[
            location.geometry.coordinates[1],
            location.geometry.coordinates[0]
          ]}

          //  //apparently this is not needed, as the marker handles it automatically!
          // onClose={() => {
          //   setActiveLocation(null);
          // }}
        >
          <div className="pop-up-bubble"> 
            {/* <SubmitForm /> */}
            {/* info in pop-up */}
            <div>
              {/* /* <img className="pop-up-img" src = 'https://i.pinimg.com/736x/ba/25/55/ba25554af75366f618080d9123ecce0b--tunnels-kauai.jpg'/> */} 
              <img className="pop-up-img" src = {url} alt="Tom Selleck"/>
              {/* <h2>{location.properties.NAME}</h2>
              <p>{location.properties.DESCRIPTIO}</p> */}
            </div>
            <div>
              <ImgUpload />
            </div>  
          </div>
        </Popup>
            </Marker>
      ))}

    </MapContainer>
  );  
}





