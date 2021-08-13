// imrse
import React, { useState, useEffect } from 'react'
import { projectStorage, db, timestamp } from '../firebase/config';

// rafce
const useStorage = (photo) => {
    // usf
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // uef
    useEffect(() => {
        const storageRef = projectStorage.ref(photo.name);
        const collectionRef = db.collection('images');
        // snap = snapshot
        storageRef.put(photo).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [photo])

    return { progress, url, error }
}

export default useStorage


