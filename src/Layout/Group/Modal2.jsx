import React from "react";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { dateConv } from "../../helpers";
import closeImg from "../../assets/images/modal-close.svg";
const Modal2 = ({ close, data }) => {

  console.log(data, "modal2")
  const currencyVal = (number) =>
    new Intl.NumberFormat(
      data?.currency?.code === 1 ? "en-NG" : "en-US",
      {
        style: "currency",
        currency: data?.currency?.code === 1 ? "NGN" : "USD",
      }
    ).format(number);

  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <>
          {/* {loading && <Loader />} */}

          <div
            // className="modal"
            // tabindex="-1"
            // role="dialog"
            // data-backdrop="static"
            // data-keyboard="false"
            id="newGroupDetails"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  onClick={() => close(data.id)}
                  //   href="#"
                  className="d-flex modal-close-link"
                  //   data-dismiss="modal"
                >
                  <span className="px-2">close</span>
                  <img src={closeImg} className="img-fluid" alt="close" />
                </button>
                <div className="modal-body p-4">
                  <div className="row justify-content-center">
                    <div className="">
                      <div className="au-card">
                        <div className="au-card-inner">
                          <h4 className="text-blue">Group Savings Breakdown</h4>
                          <div className="small-red-line"></div>

                          <div className="mt-5">
                            <table className="table">
                              <tr>
                                <td>Group Name:</td>
                                <td className="text-right weight-500">
                                  {data?.code}
                                  {/* Abuja Hikers July 2021 */}
                                </td>
                              </tr>
                              <tr>
                                <td>Savings Currency:</td>
                                <td className="text-right weight-500">Naira</td>
                              </tr>
                              <tr>
                                <td>End Date:</td>
                                <td className="text-right weight-500">
                                  {/* 12 - February - 2021 */}
                                  {dateConv(data?.endDate)}
                                </td>
                              </tr>
                              <tr>
                                <td>Group created by:</td>
                                <td className="text-right weight-500">
                                  Isaac Newton
                                </td>
                              </tr>
                              <tr>
                                <td>Target Amount:</td>
                                <td className="text-right weight-500">
                                  {currencyVal(data?.target)}
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
                                onClick={() => close()}
                                className="btn btn-cancel text-danger"
                              >
                                Cancel
                              </button>
                            </div>
                            <div className="col-lg-6">
                              <Link
                                key={data?.id}
                                to={{
                                  pathname: `/app/groupsavings/joingroup1/${data?.id}`,
                                  state: {
                                    data: data,
                                  },
                                }}
                                className="btn login-submit"
                              >
                                NEXT
                              </Link>
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
        </>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => {
  const { loading, alertType, message } = state.registration;
  return { message, alertType, loading };
};

const actionCreators = {
  getAccount: usersActions.getGroupCode,
};

export default connect(mapStateToProps, actionCreators)(Modal2);

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
