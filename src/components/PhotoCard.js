import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-card">
      <h2>Photo title: {props.title}</h2>
      <img src={props.photoUrl} alt=""></img>
      <p>{props.explanation}</p>
      <div className="bottom">
        <p>Date: {props.date}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
