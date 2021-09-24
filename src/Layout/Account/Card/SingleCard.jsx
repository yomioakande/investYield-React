import React from "react";
import circle1 from "../../../assets/images/check-circle1.svg";
const SingleCard = ({ single, deleteCard, success }) => {
  const card = [...single.pan];
  // console.log(single);
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
                  {/* {single.pan.split} */}

                  {card.map((first, index) => {
                    return (
                      <div key={index} className="weight-600">
                        {first}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-light">
                  {single?.type.toUpperCase()}
                  <span className="mx-2">{`${single?.expMnt}/${single?.expYr}`}</span>
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
          <button
            type="button"
            onClick={() => deleteCard(single.id)}
            className="btn btn-delete-card text-danger"
          >
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
