import React from "react";

const ApodCard = props => {

    return (
        <div className="apod-card" >
            <h2>{props.title}</h2>
            <img className="apod-image" alt="picture of the galaxy" src={props.hdurl} />
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};

export default ApodCard;