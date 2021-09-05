import React from "react";
import {Link} from "react-router-dom";

const Plan = ({image,planName,nameClass }) => {
  let firstName=planName.split(" ")[0]
  return (
    <>
      <Link to={{pathname:`/app/savings/create2/${firstName}`}} className="card-box d-flex flex-column mb-4" href="#">
        <div className={`au-card-smaller ${nameClass}`}>
          <img src={image} alt="retirement" />
          <p className="text-green">{planName}</p>
        </div>
      </Link>
    </>
  );
};

export default Plan;
