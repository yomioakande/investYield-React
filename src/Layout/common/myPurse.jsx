import React from "react";
import { Link } from "react-router-dom";
// import { nairaCurrencyVal } from "../../helpers/helper";
const myPurse = ({
  // modalToggle,
  id,
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

  const account = () => {
    const obj = {
      accountId: id,
      accountName: namePurse,
    };
    sessionStorage.setItem("fundpurse", JSON.stringify(obj));
  };
  return (
    <>
      <div
        className="card-box d-flex flex-column mb-4 ml-4"
        style={{ flexBasis: "100px" }}
      >
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
            <Link
              to="/app/savings/fundpurse"
              onClick={() => account()}
              className="mt-2 purse-link-btn"
            >
              Fund Purse
            </Link>
            {/* <button onClick={() => modalToggle()} className="mt-2 purse-link-btn">Fund Purse</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default myPurse;
