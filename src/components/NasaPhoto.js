import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

export default function NasaPhoto() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data);
        setPhoto(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="photo">
      <PhotoCard
        title={photo.title}
        photoUrl={photo.url}
        explanation={photo.explanation}
        date={photo.date}
      />
    </div>
  );
}
