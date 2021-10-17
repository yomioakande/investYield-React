import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import modalclose from "../assets/images/modal-close.svg";
const FundPurse = ({ close }) => {
  return ReactDom.createPortal(
    <>
      <ModalWithTransitionStyles>
        <ModalBox>
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="ustify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="au-card" style={{ width: "350px" }}>
                    <div className="au-card-inner">
                      <h4 className="text-blue">Fund Purse</h4>
                      <div className="small-red-line"></div>

                      <button
                        onClick={() => close()}
                        className="d-flex modal-close-link"
                        data-dismiss="modal"
                      >
                        <span className="px-2">close</span>
                        <img
                          src={modalclose}
                          className="img-fluid"
                          alt="close"
                        />
                      </button>

                      <div className="mt-5">
                        <form action="">
                          <div className="form-group mt-4">
                            <h5 className="text-blue weight-500">Purse Name</h5>
                            <input
                              type="text"
                              className="text-field mt-2"
                              value="Vibe Cash"
                              disabled
                            />
                          </div>
                          <div className="form-group mt-4">
                            <h5 className="text-blue weight-500">Amount</h5>
                            <input
                              type="text"
                              className="text-field mt-2"
                              value="50,000"
                            />
                          </div>
                          <div
                            className="
                              row
                              mt-4
                              align-items-center
                              justify-content-end
                            "
                          >
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                  <button className="btn login-submit">
                                    NEXT
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBox>
      </ModalWithTransitionStyles>
    </>,
    document.getElementById("portal")
  );
};

export default FundPurse;

const duration = 500;
const OVERLAY = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(2px);
  background: #003079;
  opacity: 1;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

const ModalWithTransitionStyles = styled(OVERLAY)`
  &.modal-transition-enter {
    transform: translateX(-100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(-100%);
  }
`;

const ModalBox = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  background: #003079;
  position: fixed;
  /* background: rgba(255, 255, 255, 0.94); */
  z-index: 4000;
  opacity: 1;

  .none {
    display: none !important;
  }
`;
