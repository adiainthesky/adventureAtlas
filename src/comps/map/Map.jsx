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
import plant from '../../thumbtacks/leaf.svg';
import mug from '../../thumbtacks/mug.svg';

export const thumbtack = new Icon({
    iconUrl: "/simple-luggage.svg",
    // iconUrl: require("/simple-luggage.svg"),
    iconSize: [20, 20]
});

export const altThumbtack = new Icon({
    // iconUrl: "/tree-truck.svg",
    // iconUrl: require("../thumbtacks/tree-truck.svg"),
    iconUrl: plant,
    iconSize: [27, 27]
});

export const thirdThumbtack = new Icon({
    // iconUrl: "/sloth.svg",
    // iconUrl: require("../thumbtacks/sloth.svg"),
    iconUrl: mug,
    iconSize: [32, 32]
});

export const determineIcon = (location) => {
    switch (location) {
        case 'Morocco': return altThumbtack;
        case 'Brazil': return thumbtack;
        default: return thirdThumbtack;
    }
}

// const icons = {
//     Morocco: 'altThumbtack',
//     Bolivia: 'thumbtack',
// };

// const determineIcon = (location) => {
//     if (icons[location]) return icons[location]
//         return 'thirdThumbtack';
//     }


const Map = ({userID}) => {
    // look for obj "docs " in useFirestore adn allows us to rename it as var "trips"
    const { db, docs: trips } = useFirestore('trips');
    const [lat_lng, setLat_Lng] = useState(null);
    const [uploadIsActive, setUploadIsActive] = useState(false);
    const [locations, setLocations] = useState(trips);

    // // if users clicks before finish loading will wipe out where user clicks, hence we add locations
    // useEffect(() => {
    //     setLocations([...locations, ...trips])
    // }, [locations])    
    // if users clicks before finish loading will wipe out where user clicks, hence we add locations
    useEffect(() => {
        setLocations([...trips])
    }, [trips])   
    
    const deleteTrip = (trip) => {
        // db.collection("trips").doc(trip.id).delete()
        const currentTrip = db.collection("trips").doc(trip)
        console.log(currentTrip)
        currentTrip.delete()
        .then(() => {
            // create shallow copy so that im not modifying the actual locations (because this is a rule of useState -- to avoid unintended consequences)
            // const newLocations = [...locations]
            // console.log(trip)
            // newLocations.splice(newLocations.indexOf(trip), 1)
            // setLocations(newLocations)
            alert('Your trip has been deleted!');
        })
        .catch(error => {
            alert(error.message);
        });
    }

    return (
        <div>
            {/* <Sidebar />  */}
             {/* set zoomControl to false since i am importing a new one that i can adjust */}
            <MapContainer 
                center={[20.555, -25]} 
                zoom={2.5} 
                minZoom={2} 
                maxZoom={14} 
                zoomControl={false}
                // maxBounds={[
                //     //south west
                //     [40.712, -74.227],
                //     //north east
                //     [40.774, -74.125]
                // ]}>
                >
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
                                <TripUpload userID={userID} lat={lat_lng.lat} lng={lat_lng.lng} />
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
                    // <Marker key={location.id} position={location} icon={ location.tripType==="2" ? thumbtack : altThumbtack}>
                    <Marker key={location.id} position={location} icon={determineIcon(location.location)}>
                    {/* <Marker key={location.id} position={location} icon={ (location.location==="Morocco" ?? thumbtack) || (location.location==="Bolivia" ?? altThumbtack) || altThumbtack}> */}
                        <Popup>            
                            <div className="pop-up-bubble">
                                <TripDisplay trips={trips} id={location.id} userID={userID} poster_ID={location.poster_ID} deleteTrip={deleteTrip}/>
                            </div>         
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );  
};

export default Map
