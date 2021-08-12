import React, { Component } from 'react';
import { useEffect } from 'react';
import useStorage from  '../../hooks/useStorage';


const ProgressBar = ({ photo, setPhoto }) => {
    const { url, progress } = useStorage(photo);


    useEffect(() => {
        if (url) {
            setPhoto(null);
        }
        // ????why do i need to pass in the the setPhoto????
    }, [url, setPhoto]);

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}>progress...</div>
    )
}

export default ProgressBar
