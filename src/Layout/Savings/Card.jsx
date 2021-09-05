import React from "react";

const Card = ({link, image, text, nameClass}) => {
  return (
    <>
      <a href={link} className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column flex-grow-1 mb-4">
        <div className={`au-card-smaller ${nameClass} h-100 px-3`}>
          <img src={image} alt="alt" />
          <p className="text-green">{text}</p>
        </div>
      </a>
    </>
  );
};


export default Card;