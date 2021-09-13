import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
const Modal = ({ close }) => {
  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <div
          // className="modal"
          tabindex="-1"
          role="dialog"
          // data-backdrop="static"
          // data-keyboard="false"
          // id="confirmTransfer"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body py-4 px-2">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="au-card">
                      <div className="au-card-inner">
                        <h4 className="text-blue">Confirm Transfer Funds</h4>
                        <div className="small-red-line"></div>

                        <div className="mt-5">
                          <table className="table">
                            <tr>
                              <td>You are transfering:</td>
                              <td className="text-right weight-500">
                                ₦500,000.00
                              </td>
                            </tr>
                            <tr>
                              <td>From:</td>
                              <td className="text-right weight-500">
                                Vibe Cash Purse
                              </td>
                            </tr>
                            <tr>
                              <td>To:</td>
                              <td className="text-right weight-500">
                                isaac.Newton@gmail.com
                              </td>
                            </tr>
                            <tr>
                              <td>Name:</td>
                              <td className="text-right weight-500">
                                Isaac Newton
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5 align-items-center justify-content-end">
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6">
                            <button
                              onClick={close}
                              className="btn btn-cancel text-danger"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <button className="btn login-submit">NEXT</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

export default Modal;

export const OVERLAY = styled.div`
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

export const ModalBox = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  background: #003079;
  position: fixed;
  z-index: 5000;
  opacity: 1;

  .none {
    display: none !important;
  }
`;
