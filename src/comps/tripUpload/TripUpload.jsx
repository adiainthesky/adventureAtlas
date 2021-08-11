import React, { useState } from 'react'
import "./tripUpload.css"
import { projectStorage, db } from '../../firebase/config.js'

const TripUpload = () => {
    const [trip_name, setTrip_name] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);

    const [loader, setLoader] = useState(false);
    const [progress, setProgress] = useState(0);

    const types = ['image/png', 'image/jpeg'];    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

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

            db.collection('trips')
            .add({
                trip_name: trip_name,
                location: location,
                description: description,
                photo: url,
            })
            .then(() => {
                alert('Your trip has been submitted!');
                setLoader(false);
            })
            .catch(error => {
                alert(error.message);
                setLoader(false);
            });

            setTrip_name("");
            setLocation("");
            setDescription("");
        })


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
            <h1>Trip info</h1>
            <label>Trip Name</label>
            <input 
                placeholder="Trip Name"
                value={trip_name}
                onChange={(e) => setTrip_name(e.target.value)} 
                />

            <label>Location</label>
            <input 
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                />

            <label>Description</label>
            <textarea 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                ></textarea>

            <label>Photo</label>
            <form>
                <input 
                    type="file"
                    placeholder="Photo"
                    // value={photo}
                    onChange={changeHandler} 
                />
                <div className="output">
                {/* if left conditional is true, then output left conditional */}
                { error && <div className="error">{ error }</div> }
                {/* this shows the name of the file if it uploaded */}
                { photo && <div> { photo.name }</div> }
                {/* { file && <ProgressBar file={file} setFile={setFile}/> } */}
                </div>
            </form>
            
            {/* if loading is true, button will change color */}
            <button type="submit" style={{background : loader ? "#ccc" : " rgb(2,2,110" }}>
                Add trip!
            </button>
        </form>
    )
}

export default TripUpload;
