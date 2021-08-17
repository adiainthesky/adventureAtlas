// import React, { useState } from "react";
// import { MapContainer, useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
// import * as fauxData from "../2fauxData.json";
// import './Map.css';
// import { MapClickHandler } from "./MapClickHandler";
// import ImgUpload from "../../components/ImgUpload";
// import UploadForm from '../tripDisplay/UploadForm';
// import ImageGrid from '../tripDisplay/ImageGrid';
// import FrontImg from '../tripDisplay/FrontImg';
// import TripUpload from "../tripUpload/TripUpload";

// export const thumbtack = new Icon({
//   iconUrl: "/simple-luggage.svg",
//   iconSize: [35, 35]
// });

// const Form = () => {

//     const [features, setFeatures] = React.useState(fauxData.features);
//     const url = 'https://storage.googleapis.com/geophotoalbum.appspot.com/tommy'
//     const [selectedImg, setSelectedImg] = useState(null);

//     return (
//         <MapContainer center={[45.4, -75.7]} zoom={12}>
//         <MapClickHandler onClick={ (event)=> {
//             console.log("hello")
//             const nextFeatures = [...features, {geometry: {coordinates: [event.latlng.lng, event.latlng.lat]}, properties: {NAME: "new name", DESCRIPTIO: "new description"}} ]
//             setFeatures(nextFeatures)
//             //call API to update features, and if not successful, reset the setFeastures we just called BACK to what it was b4 
//             //warning: if you click 3 times fast and last not successful, it dangerous.  Sara can send me notes since this is apparently a very common pattern (called "eagerly updating the UI", as opposed to "lazily" updating UI)
//         }}/>
//         <TileLayer
//             url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
//             contributors'
//             />

//             {features.map(location => (
//             <Marker
//                 key={location.properties.PARK_ID}
//                 position={[
//                 //their lat/long is in reverse order so below the [1] comes before the [0]
//                 location.geometry.coordinates[1],
//                 location.geometry.coordinates[0]
//                 ]}
//                 icon={thumbtack}
//             >
//             <Popup
//             //like a location, popups need to know their location
//                 position={[
//                     location.geometry.coordinates[1],
//                     location.geometry.coordinates[0]
//                 ]}
//                 >
//                 <div className="pop-up-bubble"> 

//                     {/* <Title/> */}
//                     {/* <UploadForm /> */}
//                     {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
//                     {/* only showing frontImg IF one exists (ie, left condition == true) */}
//                     {/* { selectedImg && ( */}
//                     {/* <FrontImg selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> */}
//                     {/* )} */}
//                     <div className="form">
//                         <TripUpload /> 
//                     </div>                    
//                 </div>
//             </Popup>
//                 </Marker>
//         ))}
//         </MapContainer>
//     );  
// }

// export default Form;