import React, { useState, useEffect } from "react";
import { MapContainer, useMapEvent, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { Icon } from "leaflet";
import './Map.css';
import { MapClickHandler } from "./MapClickHandler";
import ImgUpload from "../../components/ImgUpload";
import UploadForm from '../oldTripDisplay/UploadForm';
import ImageGrid from '../oldTripDisplay/ImageGrid';
import FrontImg from '../oldTripDisplay/FrontImg';
import TripUpload from '../tripUpload/TripUpload';
import TripDisplay from '../tripDisplay/TripDisplay';
import Sidebar from "../sidebar/Sidebar";
import useFirestore from '../../hooks/useFirestore';
import useData from '../../hooks/useData';

export const thumbtack = new Icon({
    iconUrl: "/simple-luggage.svg",
    iconSize: [27, 27]
});

const Map = () => {
    // look for obj "docs " in useFirestore adn allows us to rename it as var "trips"
    const { docs: trips } = useFirestore('trips');
    const [lat_lng, setLat_Lng] = useState(null);
    const [uploadIsActive, setUploadIsActive] = useState(false);
    const [locations, setLocations] = useState(trips);

    // if users clicks before finish loading will wipe out where user clicks, hence we add locations
    useEffect(() => {
        setLocations([...locations, ...trips])
    }, [trips])    

    return (
        // <div>
        //     <Sidebar /> 
        // {/* set zoomControl to false since i am importing a new one that i can adjust */}
            <MapContainer center={[27.4, -45.7]} zoom={2.5} zoomControl={false}>
                <ZoomControl position="bottomright" zoomInText="🔎" zoomOutText="🌎"></ZoomControl>
                <MapClickHandler onClick={ (event)=> {
                    setLat_Lng({lat: event.latlng.lat, lng: event.latlng.lng})
                    setUploadIsActive(true)
                    //call API to update trips, and if not successful, reset the setFeastures we just called BACK to what it was b4 
                    //warning: if you click 3 times fast and last not successful, it dangerous.  Sara can send me notes since this is apparently a very common pattern (called "eagerly updating the UI", as opposed to "lazily" updating UI)
                }}/>

                {uploadIsActive ? 
                    <Marker position={lat_lng}>
                        <Popup>   
                            <div className="pop-up-bubble"> 
                                <TripUpload lat={lat_lng.lat} lng={lat_lng.lng} />
                            </div>                    
                        </Popup>
                    </Marker>
                : ""}


                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
                    contributors'
                    />

                {locations && locations.map(location => ( 
                    <Marker key={location.id} position={location} icon={thumbtack}>
                        <Popup>            
                            <div className="pop-up-bubble">
                                <TripDisplay trips={trips} id={location.id}/>
                                {/* <TripDisplay photo={location.photo}/> */}

                                {/* {location.trip_name && (
                                    <h3>TRIP!</h3>
                                )} */}
                                {/* <TripUpload lat={location.lat} lng={location.lng} /> */}
                                {/* <UploadForm /> */}
                                {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
                                {/* only showing frontImg IF one exists (ie, left condition == true) */}
                                {/* { selectedImg && ( */}
                                {/* <FrontImg selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> */}
                                {/* )} */}
                            </div>         
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        // </div>
    );  
}

export default Map;


