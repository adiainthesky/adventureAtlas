import React, { Component } from 'react';
import { useEffect } from 'react';
import useStorage from  '../hooks/useStorage';


const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);


    useEffect(() => {
        if (url) {
            setFile(null);
        }
        // ????why do i need to pass in the the setFile????
    }, [url, setFile]);

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}>progress...</div>
    )
}

export default ProgressBar
