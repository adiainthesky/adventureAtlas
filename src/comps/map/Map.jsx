import React, { useState, useEffect } from "react";
import { MapContainer, useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as fauxData from "../fauxData.json";
import './Map.css';
import { MapClickHandler } from "./MapClickHandler";
import ImgUpload from "../../components/ImgUpload";
import UploadForm from '../oldTripDisplay/UploadForm';
import ImageGrid from '../oldTripDisplay/ImageGrid';
import FrontImg from '../oldTripDisplay/FrontImg';
import TripUpload from "../tripUpload/TripUpload";
import useFirestore from '../../hooks/useFirestore';
import useData from '../../hooks/useData';


// import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;
// // Importing images from locally stored assets to address a bug
// // in CodeSandbox: https://github.com/codesandbox/codesandbox-client/issues/3845
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('./images/marker-icon-2x.png'),
//     iconUrl: require('./images/marker-icon.png'),
//     shadowUrl: require('./images/marker-shadow.png')
// });

export const thumbtack = new Icon({
    iconUrl: "/simple-luggage.svg",
    iconSize: [35, 35]
});

const Map = () => {

    // const trips = useFirestore('trips');
    // look for obj "docs " in useFirestore adn allows us to rename it as var "trips"
    const { docs: trips } = useFirestore('trips');
    console.log("*****************", trips);
    // const url = 'https://storage.googleapis.com/geophotoalbum.appspot.com/tommy'
    // const [selectedImg, setSelectedImg] = useState(null);
    const [lat_lng, setLat_Lng] = useState(null);
    // might be useful to add lat and long coordinate to replace null
    const [locations, setLocations] = useState(trips);

    // if users clicks before finish loading will wipe out where user clicks, hence we add locations
    useEffect(() => {
        setLocations([...locations, ...trips])
    }, [trips])    

    return (
        <MapContainer center={[45.4, -75.7]} zoom={2.5}>
        <MapClickHandler onClick={ (event)=> {
            setLat_Lng({lat: event.latlng.lat, lng: event.latlng.lng})
            const allLocations = [...trips, {lat: event.latlng.lat, lng: event.latlng.lng} ];
            setLocations(allLocations)
            console.log(trips)
            // console.log(locations[0].lng);
            //call API to update trips, and if not successful, reset the setFeastures we just called BACK to what it was b4 
            //warning: if you click 3 times fast and last not successful, it dangerous.  Sara can send me notes since this is apparently a very common pattern (called "eagerly updating the UI", as opposed to "lazily" updating UI)
        }}/>
        <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
            contributors'
        />

        {locations && locations.map(location => ( 
            <Marker position={location} icon={thumbtack}>
                <Popup>            
                    <div className="pop-up-bubble"> 
                        <TripUpload lat={location.lat} lng={location.lng} />
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
    );  
}

export default Map;


