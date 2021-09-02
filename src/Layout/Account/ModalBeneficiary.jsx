import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactDom from "react-dom";
import modalclose from "../../assets/images/modal-close.svg";

const ModalBeneficiary = ({ close }) => {
  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <>
          <div
            className=""
            tabindex="-1"
            role="dialog"
            data-backdrop="static"
            data-keyboard="false"
            // id="addBeneficiary"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  onClick={() => close()}
                  className="d-flex modal-close-link"
                  data-dismiss="modal"
                >
                  <span className="px-2">close</span>
                  <img src={modalclose} className="img-fluid" alt="close" />
                </button>
                <div className="modal-body p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="text-blue">Add beneficiary</h3>
                      <div className="small-red-line"></div>
                      <form action="" className="mt-5">
                        <div className="form-group">
                          <input
                            type="text"
                            className="text-field"
                            placeholder="Enter beneficiary email"
                          />
                        </div>
                        <p className="text-blue text-right font-sm">
                          Adewole Adekeye
                        </p>
                        <div className="row mt-5 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button className="btn btn-cancel text-danger">
                                  Cancel
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <button
                                  className="btn login-submit"
                                  data-toggle="modal"
                                  data-target="#newGroupDetails"
                                  data-dismiss="modal"
                                >
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
        </>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

const OVERLAY = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(2px);
  background: #003079;
  opacity: 0.96;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

const ModalBox = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width:100%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  background: #003079;
  position: fixed;
  /* background: rgba(255, 255, 255, 0.94); */
  z-index: 5000;
  opacity: 1;

  .none {
    display: none !important;
  }
`;

export default ModalBeneficiary;
