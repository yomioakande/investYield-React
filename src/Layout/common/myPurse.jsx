import React from "react";

const myPurse = ({ namePurse, purseAmount, nameClass, hider, hide }) => {
  return (
    <>
      <a href="*" className="card-box d-flex flex-column mb-4">
        <div className={`au-card-purse ${nameClass} flex-grow-1`}>
          <div className="au-card-elements">
            <p className="mt-1">{namePurse}</p>
            <p className={`mt-1 ${hide? `select-hide`:null}`}>₦ {purseAmount}</p>
            <a href="#" onClick={()=>hider()} className="mt-2 purse-link-btn">{hide? "Show":"Hide"} Balance</a>
          </div>
        </div>
      </a>
    </>
  );
};

export default myPurse;
