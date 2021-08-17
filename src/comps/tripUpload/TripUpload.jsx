import React, { useState } from 'react'
import "./tripUpload.css"
import { MapContainer, useMapEvent, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { projectStorage, db } from '../../firebase/config.js'
import ProgressBar from '../../OLD_and_Unused/ProgressBar';

const uploadTripToDB = ( userID, lat, lng, tripData, setLoader ) => {
    const { tripName, location, tripType, description, url } = tripData
    db.collection('trips')
    .add({
        poster_id: userID,
        tripName: tripName,
        location: location,
        tripType: tripType,
        description: description,
        photo: url,
        lat: lat,
        lng: lng,
    })
    .then(() => {
        alert('Your trip has been submitted!');
        setLoader(false);
    })
    .catch(error => {
        alert(error.message);
        setLoader(false);
    });
    
}

const TripUpload = ({userID, lat, lng}) => {
    const [tripName, setTripName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);
    const [tripType, setTripType] = useState(["Cultural"]);

    const [loader, setLoader] = useState(false);
    const [progress, setProgress] = useState(0);

    const types = ['image/png', 'image/jpeg'];    
    
    const resetStateAfterUpload = () => {
        setTripName("");
        setLocation("");
        setDescription("");
        setTripType("1");
        setPhoto(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        if (photo) {
        // get url for photo 
            const storageRef = projectStorage.ref(photo.name);

            storageRef.put(photo).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, (err) => {
                setError(err);
            }, async () => {
                const url = await storageRef.getDownloadURL();
                // const createdAt = timestamp();
                // collectionRef.add({ url, createdAt });
                // setUrl(url);

                uploadTripToDB(userID, lat, lng, { tripName, location, tripType, description, url }, setLoader)
                resetStateAfterUpload()
            })
        }   else {
                setError('You must include a photo with your submission');
            } 
    };


    // if (selected && types.includes(selected.type)) {
    //     setPhoto(selected);
    //     setError('');
    // } else {
    //     setPhoto(null);
    //     setError('Please select a .png or .jpeg image file');
    // }



    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setPhoto(selected);
            setError('');
        } else {
            setPhoto(null);
            setError('Please select a .png or .jpeg image file');
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Trip Name</label>
            <input 
                placeholder="Trip Name"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)} 
                />

            <label>Location</label>
            <input 
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                />

            <label>Type of Experience</label>
            <select 
                value={tripType} 
                // e.target.value grabs associated number, i wanted text but for some reason firebase didnt like e.target.text
                onChange={(e) => setTripType(e.target.value)} 
                className="drop-down"
            >
                <option selected value="1">General</option>
                <option value="2">Culture</option>
                <option value="3">Nature</option>
            </select>

            
            <label>Description</label>
            <textarea 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                ></textarea>

            <label>Photo</label>
            {/* <form className="photo-upload-button"> */}
                <input className="photo-upload-button"
                    type="file"
                    // placeholder="Photo"
                    // value={photo}
                    onChange={changeHandler} 
                />
                <div className="output">
                {/* if left conditional is true, then output left conditional */}
                { error && <div className="error">{ error }</div> }
                {/* this shows the name of the file if it uploaded */}
                { photo && <div> { photo.name }</div> }
                </div> 
            {/* </form> */}
            
            {/* if loading is true, button will change color */}
            {/* <button type="submit" style={{background : loader ? "#ccc" : " green" }}> */}
            <button type="submit" className={!loader ? "add-trip-button" : "add-trip-button loading"} >
                Add trip!
            </button>
        </form>
    )
}

export default TripUpload;
