import React from "react";

const MenuBar = ({image, link,menuText}) => {
  return (
    <>
      <a href={link} className="col-lg-2 px-3 col-md-4 profile-cards d-flex flex-column mb-3">
        <div className="au-card flex-grow-1 px-2">
          <div className="au-card-inner">
            <div className="d-flex flex-column align-items-center">
              <img src={image} className="img-fluid" alt="" />
              <p className="text-dark text-center mt-3">{menuText}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default MenuBar;
