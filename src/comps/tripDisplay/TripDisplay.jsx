import React from "react";
import "./TripDisplay.css";

const TripDisplay = ({ trips, id, userID, poster_ID, deleteTrip }) => {
    const docs = trips;
    const selectedDoc = docs.filter((doc) => doc["id"] === id);

    if (selectedDoc["0"]) {
        return (
            <div className="display">
                {selectedDoc["0"]["photo"] && <img
                    className="img-display"
                    width={300}
                    src={selectedDoc["0"]["photo"]}
                    alt="uploaded pic"
                />}
                <h1>{ selectedDoc["0"]["tripName"]}</h1>
                <h2>{selectedDoc["0"]["location"]}</h2>
                <p>{selectedDoc["0"]["description"]}</p>
                {selectedDoc["0"]["poster_id"] === userID && ( 
                <button className="deleteButton" onClick={() => deleteTrip(id)}>Delete</button>
                )}
                
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default TripDisplay;