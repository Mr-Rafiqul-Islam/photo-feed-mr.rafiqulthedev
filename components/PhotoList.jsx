import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default PhotoList;
