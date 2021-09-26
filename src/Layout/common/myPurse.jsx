import React from "react";
import { Link } from "react-router-dom";
import { nairaCurrencyVal } from "../../helpers/helper";
const myPurse = ({
  namePurse,
  purseAmount,
  nameClass,
  toggleHide,
  hidden,
  index,
}) => {
  return (
    <>
      <div className="card-box d-flex flex-column mb-4">
        <div className={`au-card-purse ${nameClass} flex-grow-1`}>
          <div className="au-card-elements">
            <Link to="/app">
              <p className="mt-1">{namePurse}</p>
              <p className={`mt-1 ${!hidden[index] ? `select-hide` : null}`}>
                {nairaCurrencyVal(purseAmount)}
              </p>
            </Link>
            <p
              onClick={() => toggleHide(index)}
              className="mt-2 purse-link-btn"
            >
              {!hidden[index] ? "Show" : "Hide"} Balance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default myPurse;
