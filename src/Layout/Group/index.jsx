import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrowBlack from "../../assets/images/arrow-right-black.svg";
import arrowWhite from "../../assets/images/arrow-right-white.svg";
import Modal from "./Modal";
const Index = () => {
  const [modalInOpen, setModalInOpen] = useState(false);

  const modalToggle = () => {
    setModalInOpen(true);
  };

  const close = () => {
    setModalInOpen(false);
  };
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row mt-4 justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="title-2">What would you like to do?</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mt-4">
                      <Link
                        to={"/app/groupsavings1/private"}
                        className="create-private-group d-flex align-items-center"
                      >
                        <div>
                          <h5 className="text-blue">Create a private group</h5>
                          <p className="mt-2 text-black font-sm">
                            Create a group savings where you decide the group
                            members.
                          </p>
                        </div>
                        <img src={arrowBlack} className="img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="col-lg-6 mt-4">
                      <Link
                        to={"/app/groupsavings1/public"}
                        className="create-public-group d-flex align-items-center"
                      >
                        <div>
                          <h5 className="text-green">Create a public group</h5>
                          <p className="mt-2 text-black font-sm">
                            Create a public group for anyone to join and save.
                          </p>
                        </div>
                        <img
                          src={arrowBlack}
                          className="img-fluid"
                          alt="blackArrow"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-4">
                      <a
                        href="/"
                        className="join-savings-challenge d-flex align-items-center"
                      >
                        <div>
                          <h5 className="text-light">
                            Join a savings challenge
                          </h5>
                          <p className="mt-2 text-light font-sm">
                            Join a group savings challenge and save.
                          </p>
                        </div>
                        <img
                          src={arrowWhite}
                          className="img-fluid"
                          alt="arrowWhite"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 mt-4">
                      <button
                        type="button"
                        onClick={modalToggle}
                        className="join-private-group d-flex align-items-center"
                        // data-toggle="modal"
                        // data-target="#enterGroupCode"
                      >
                        <div>
                          <h5 className="text-blue">Join a private group</h5>
                          <p className="mt-2 text-black font-sm">
                            Join a group as long as you have the group code
                          </p>
                        </div>
                        <img
                          src={arrowBlack}
                          className="img-fluid"
                          alt="blackArrow"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalInOpen && <Modal close={close} />}
    </>
  );
};

export default Index;
