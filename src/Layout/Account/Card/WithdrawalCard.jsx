import React from "react";
import circle1 from "../../../assets/images/check-circle1.svg"
const WithdrawalCard = ({bankDetails}) => {
  return (
    <>
      <div className="debit-card-withdrawal-div py-5 px-5 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="text-light font-rem1 ">{bankDetails?.aName}</h3>
            <h3 className="text-light mt-3">{bankDetails?.number}</h3>
            <h3 className="text-light mt-3">{bankDetails?.bName}</h3>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center">
              <img
                src={circle1}
                className="img-fluid"
                alt="Card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawalCard;
