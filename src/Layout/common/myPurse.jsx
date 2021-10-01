import React from "react";
import { Link } from "react-router-dom";
// import { nairaCurrencyVal } from "../../helpers/helper";
const myPurse = ({
  namePurse,
  purseAmount,
  currency,
  nameClass,
  toggleHide,
  hidden,
  index,
}) => {
  const currencyVal = (number) =>
    new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
      style: "currency",
      currency: currency === "NGN" ? "NGN" : "USD",
    }).format(number);
  return (
    <>
      <div className="card-box d-flex flex-column mb-4">
        <div className={`au-card-purse ${nameClass} flex-grow-1`}>
          <div className="au-card-elements">
            <Link to="/app">
              <p className="mt-1">{namePurse}</p>
              <p className={`mt-1 ${!hidden[index] ? `select-hide` : null}`}>
                {currencyVal(purseAmount)}
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
