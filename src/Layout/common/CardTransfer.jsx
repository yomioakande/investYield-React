import React from "react";
// import { format } from "date-fns";
const CardTransfer = ({ descr, transactionId, date, amount, value }) => {
  

  const dates1=new Date(date).toUTCString()

  console.log(dates1,'fgg')



  return (
    <>
      <div className="d-flex justify-content-between mt-4 align-items-start">
        <div className="au-message__item w-100">
          <div className="au-message__item-inner px-2 py-3 justify-content-between align-items-start">
            <div className="col-lg-1">
              {value === 1 ? (
                <i className="fas fa-caret-up text-green"></i>
              ) : (
                <i className="fas fa-caret-down text-danger"></i>
              )}
            </div>
            <div className="au-message__item-text col-lg-8">
              <div className="text px-0 mx-0">
                <h5 className="name">
                  {descr} Transaction ID: {transactionId}
                  {/* Transfer from RAYMOND ADEWOLE [******8907]. Transaction ID: */}
                  {/* XXXXXXXXXXXXXXX */}
                </h5>
                <p className="mt-3">
                  <span className="mr-2">Date:</span>
                  <span>{dates1}</span>
                  {/* <span>Fri, 04 Sep 2020 15:34:20 GMT</span>{" "} */}
                </p>
              </div>
            </div>
            <div className="mt-0 col-lg-3 text-right">
              <h4
                className={`font-weight-bold ${
                  value ? "text-green" : "text-danger"
                }`}
              >
                {amount}
                {/* ₦ 5000.00 */}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTransfer;
