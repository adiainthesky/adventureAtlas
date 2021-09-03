import React, { useState } from 'react'
import "./tripUpload.css"
import { projectStorage, db } from '../../firebase/config.js'

const uploadTripToDB = ( userID, lat, lng, tripData, setLoader, setMessage ) => {
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
        setMessage('Your trip has been submitted!');
        setLoader(false);
    })
    .catch(error => {
        alert(error.message);
        setLoader(false);
    });
}

const TripUpload = ({userID, lat, lng, setMessage}) => {
    const [tripName, setTripName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);
    const [tripType, setTripType] = useState(1);
    const [loader, setLoader] = useState(false);
    
    const types = ['image/png', 'image/jpeg'];    
    
    const resetStateAfterUpload = () => {
        setTripName("");
        setLocation("");
        setDescription("");
        setTripType("");
        setPhoto(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        if (photo) {
        // get url for photo 
            const storageRef = projectStorage.ref(photo.name);

            storageRef.put(photo).on('state_changed', (snap) => {
            }, (err) => {
                setError(err);
            }, async () => {
                const url = await storageRef.getDownloadURL();
                // const createdAt = timestamp();
                // collectionRef.add({ url, createdAt });
                // setUrl(url);
                uploadTripToDB(userID, lat, lng, { tripName, location, tripType, description, url }, setLoader, setMessage)
                resetStateAfterUpload()
            })
        }   else {
                setError('You must include a photo with your submission');
                setLoader(false);
            } 
    };

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
            <label>Name of Adventure</label>
            <input 
                placeholder="Adventure"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)} 
                />
            <label>Location</label>
            <input 
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                />
            <label>Type</label>
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

            <label>Adventure Story</label>
            <textarea 
                placeholder="Please share a few words about your special memory in this place"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                ></textarea>

            <label>Photo</label>
                <input className="photo-upload-button"
                    type="file"
                    onChange={changeHandler} 
                />
                <div className="output">
                {/* if left conditional is true, then output left conditional */}
                { error && <div className="error" >{ error }</div> }
                {/* this shows the name of the file if it uploaded */}
                { photo && <div> Uploaded: { photo.name }</div> }
                </div> 
            
            {/* if loading is true, button will change color */}
            <button type="submit" className={!loader ? "add-trip-button" : "add-trip-button loading"} >
                Add trip!
            </button>
        </form>
    )
}

export default TripUpload;
