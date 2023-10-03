import React from "react";

const Slide = ({ imageSrc, caption }) => {
  return (
    <div className="slide">
      <img src={imageSrc} alt={caption} />
    </div>
  );
};

export default Slide;
