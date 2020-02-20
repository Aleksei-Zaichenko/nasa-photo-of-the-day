import React,{useState, useEffect} from "react";
import axios from "axios";

import ApodCard from "./ApodCard";

export default function ApodGrid () {

    const [data, setData] = useState({});

    useEffect(() => {
        
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
                console.log(response.data);
                setData(response.data);
          })
          .catch(error => {
            console.log("Sorry, something went wrong", error);
          });
      }, []);

    return (
        <div className="container">
            <div className="entry">
                <ApodCard 
                            title = {data.title} 
                            hdurl = {data.hdurl} 
                            date ={data.date} 
                            explanation = {data.explanation}
                    />;
            </div>
        </div>
    );
}