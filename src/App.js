import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as fauxData from "./data/fauxData.json";
// import * as parkData from "./data/fauxData.json";
import './App.css';

export const thumbtack = new Icon({
  iconUrl: "https://img.icons8.com/emoji/48/000000/pushpin-emoji.png",
  iconSize: [25, 25]
});

export default function App() {
  const [activeLocation, setActiveLocation] = React.useState(null);

  return (
    <MapContainer center={[45.52, -122.67]} zoom={12}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
          contributors'
        />

        {fauxData.features.map(location => (
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
            // icon={icon}
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
          <div> 
            {/* info in pop-up */}
            <h2>{location.properties.NAME}</h2>
            <p>{location.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
            </Marker>
      ))}

    </MapContainer>
  );  
}





