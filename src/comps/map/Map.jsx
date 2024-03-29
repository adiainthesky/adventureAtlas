import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { Icon } from "leaflet";
import './Map.css';
import { MapClickHandler } from "./MapClickHandler";
import TripUpload from '../tripUpload/TripUpload';
import TripDisplay from '../tripDisplay/TripDisplay';
import useFirestore from '../../hooks/useFirestore';
import leaf from '../../thumbtacks/leaf.svg';
import mug from '../../thumbtacks/mug.svg';
import suitcase from '../../thumbtacks/suitcase.svg';

export const luggage = new Icon({iconUrl: suitcase, iconSize: [20, 20]});
export const plant = new Icon({iconUrl: leaf, iconSize: [29, 29]});
export const tea = new Icon({iconUrl: mug, iconSize: [34, 34]});

export const determineIcon = (tripType) => {
    switch (tripType) {
        case '2': return tea;
        case '3': return plant;
        default: return luggage;
    }
}

const Map = ({userID, setMessage, setWelcome}) => {
    // look for obj "docs " in useFirestore and allows us to rename it as var "trips"
    const { db, docs: trips } = useFirestore('trips');
    const [lat_lng, setLat_Lng] = useState(null);
    const [uploadIsActive, setUploadIsActive] = useState(false);
    const [locations, setLocations] = useState(trips);

    useEffect(() => {
        setLocations([...trips])
    }, [trips])   

    const deleteTrip = (trip ) => {
        const currentTrip = db.collection("trips").doc(trip)
        currentTrip.delete()
        .then(() => {
            setMessage('Your trip has been deleted!');
        })
        .catch(error => {
            alert(error.message);
        });
    }

    return (
        <div className="map">
             {/* set zoomControl to false since i am importing a new one that i can adjust */}
            <MapContainer 
                center={[5.555, -25]} 
                zoom={2.5} 
                minZoom={2} 
                maxZoom={14} 
                zoomControl={false}
                continuousWorld={false}
                worldCopyJump={true}

                >
                <ZoomControl position="bottomright" zoomInText="🔎" zoomOutText="🌎"></ZoomControl>
                <MapClickHandler onClick={ (event)=> {
                    setLat_Lng({lat: event.latlng.lat, lng: event.latlng.lng})
                    // this is whether or not we are showing the popup
                    setUploadIsActive(true)
                    setMessage("")
                    setWelcome(false)
                    //call API to update trips, and if not successful, reset the setFeastures we just called BACK to what it was b4 
                    //warning: if you click 3 times fast and last not successful, it dangerous.  Sara can send me notes since this is apparently a very common pattern (called "eagerly updating the UI", as opposed to "lazily" updating UI)
                }}/>
                {(uploadIsActive && userID)  ? 
                    <Marker position={lat_lng}>
                        <Popup>   
                            <div className="pop-up-bubble"> 
                                <TripUpload userID={userID} lat={lat_lng.lat} lng={lat_lng.lng} setMessage={setMessage}
                                />
                            </div>                    
                        </Popup>
                    </Marker>
                : ""}

                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
                    contributors'
                    continuousWorld={false}
                    />

                {locations && locations.map(location => ( 
                    <Marker key={location.id} position={location} icon={determineIcon(location.tripType)}>
                        <Popup >            
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
