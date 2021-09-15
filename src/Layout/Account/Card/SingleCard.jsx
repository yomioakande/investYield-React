import React from "react";
import circle1 from "../../../assets/images/check-circle1.svg"
const SingleCard = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 mt-4">
        <div className="debit-card-div py-5 px-4 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="row align-items-center flex-wrap">
                <div className="col-lg-4 col-4">
                  <div className="d-flex">
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="d-flex">
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-4 d-flex text-light">
                  <div className="weight-600">9</div>
                  <div className="weight-600">9</div>
                  <div className="weight-600">6</div>
                  <div className="weight-600">3</div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-light">
                  Mastercard
                  <span className="mx-2">03 / 23</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-center">
                <img src={circle1} className="img-fluid" alt="Card" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-delete-card text-danger">
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
