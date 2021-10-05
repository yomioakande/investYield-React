import React, { useState }  from "react";
import Congrats from "../Congrats";
const PayBank = ({ details, setActive }) => {

  const [congratsModal, setCongratsModal] = useState(false);

  const modalToggle1 = () => {
    setCongratsModal(true);
  };
  return (
    <>
      <>
        {" "}
        <div className="col-lg-6 flex-column flex-grow-1">
          <div className="au-card h-100">
            <div className="au-card-inner">
              <h4 className="text-blue">Pay with bank transfer</h4>
              <div className="small-red-line"></div>
              {Object.keys(details).length > 0 ? (
                <div className="mt-50">
                  <div className="payment-selection">
                    <div className="bank-details">
                      <p>Account Name:</p>
                      <h4>{details.accountName}</h4>
                    </div>
                    <div className="bank-details">
                      <p>Account Number:</p>
                      <h3>{details.accountNo}</h3>
                    </div>
                    <div className="bank-details">
                      <p>Bank:</p>
                      <h4>{details.bank}</h4>
                    </div>
                    <div className="row mt-50 align-items-center justify-content-end">
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6">
                            <button
                              className="btn btn-cancel text-danger"
                              onClick={() => setActive(1)}
                            >
                              Previous
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <button className="btn login-submit" onClick={() =>modalToggle1()}>NEXT</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="bank-details">
                  Virtual Account has not been configured for this account
                </p>
              )}
            </div>
          </div>
        </div>
      </>
      {congratsModal && (
        <Congrats
          headline1={"Fantastic!"}
          headline2={"A 30 day Stash has been created."}
        />
      )}
    </>
  );
};

export default PayBank;
