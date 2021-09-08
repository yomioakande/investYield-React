import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactDom from "react-dom";
import modalclose from "../assets/images/modal-close.svg";
import "../assets/css/theme.css";
import "./transitions.css";
// import { CSSTransition } from "react-transition-group";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { usersActions } from "../redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../common/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal1 = ({
  alertType,
  message,
  loading,
  bvnReg,
  confirmBvnReg,
  close,
}) => {
  const [dropper, setDropper] = useState(false);
  const [bvn, setBvn] = useState(true);
  const [nextPage, setNextPage] = useState(false);
  const [showError, setShowError] = useState(true);

  const dropdown = () => {
    setDropper(!dropper);
  };
  const nextOtp = () => {
    setBvn(false);
    setNextPage(true);
  };

  const success = () => {
    toast.success("BVN Registered successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    close();
  };

  const initialValues = {
    bvn: "",
    otp: "",
  };

  const validationSchema = Yup.object({
    bvn: Yup.string().required("BVN is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    let obj;
    if (nextPage !== true) {
      obj = {
        bvn: values.bvn,
      };
      bvnReg(obj, "/api/v1/user/bvn", nextOtp);
    } else {
      obj = {
        id: values.bvn,
        token: values.otp,
      };

      confirmBvnReg(obj, "/api/v1/user/bvn", success);
    }
    show();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  };

  return ReactDom.createPortal(
    <>
      <ModalWithTransitionStyles>
        <ModalBox>
          {bvn && (
            <>
              {loading && <Loader />}
              <div
                className=""
                tabindex="-1"
                role="dialog"
                data-backdrop="static"
                data-keyboard="false"
                id="know-better1"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      onClick={() => close()}
                      className="d-flex modal-close-link"
                      data-dismiss="modal"
                    >
                      <span className="px-2">close</span>
                      <img src={modalclose} className="img-fluid" alt="close" />
                    </button>
                    <div className="modal-body">
                      <div className="p-4">
                        <h5 className="dashboard-modal-header mb-2">
                          We want to know you better
                        </h5>
                        <div className="small-red-line"></div>
                        <p className="mt-5 dashboard-modal-p">
                          Please provide us with some extra important
                          information for us to verify you and know you better.
                        </p>
                        {showError
                          ? alertType && (
                              <div
                                className={`font-sm alert mt-3 ${alertType}`}
                              >
                                {message}
                              </div>
                            )
                          : null}
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="text-field-modal"
                              placeholder="Enter BVN"
                              name="bvn"
                              onChange={formik.handleChange}
                              // value={bvnNum}
                              // onChange={}
                            />
                          </div>
                          <div className="d-flex justify-content-center flex-column mt-4">
                            <button
                              onClick={() => dropdown()}
                              //   href="#"
                              className="d-flex no-decor bvn-text align-self-center"
                              id="why-bvn-link"
                            >
                              Why we need your BVN{" "}
                              <span className="px-2">
                                <i className="fas fa-caret-down"></i>
                              </span>
                            </button>

                            <div
                              className={`${
                                !dropper ? "none" : null
                              } p-3 modal-div-grey BVN-div mt-4`}
                              id="why-bvn"
                            >
                              <p className="bvn-text-p">
                                BVN is required to validate your identity and
                                protect you against identity theft. This also
                                ensures another level of safety for your funds,
                                transactions and unlock some features on the app
                              </p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <input
                              type="submit"
                              className="btn modal-button"
                              // data-dismiss="modal"
                              // data-toggle="modal"
                              // data-target="#know-better2"
                              // >
                              value={"CONTINUE"}
                            />
                            {/* </button> */}
                          </div>
                        </form>
                        <div className="mt-4 d-flex justify-content-center">
                          <button
                            onClick={() => close()}
                            className="text-green no-decor text-center"
                          >
                            I’ll do this later
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {!bvn && (
            <>
              {" "}
              <div
                //   className="modal"
                tabindex="-1"
                role="dialog"
                data-backdrop="static"
                data-keyboard="false"
                id="know-better2"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      onClick={() => close()}
                      className="d-flex modal-close-link"
                      data-dismiss="modal"
                    >
                      <span className="px-2">close</span>
                      <img src={modalclose} className="img-fluid" alt="close" />
                    </button>
                    <div className="modal-body">
                      <div className="p-4">
                        <h5 className="dashboard-modal-header mb-2">
                          We want to know you better
                        </h5>
                        <div className="small-red-line"></div>
                        <h6 className="mt-5 dashboard-modal-p">
                          Please enter the One-Time Password (OTP) that has been
                          sent to the phone number linked with your BVN
                          {/* <span className="reg-p-number">
                            {" "}
                            +234705*****95.
                          </span>{" "} */}
                          {/* linked with your BVN */}
                        </h6>
                        {showError
                          ? alertType && (
                              <div className={`font-sm alert ${alertType}`}>
                                {message}
                              </div>
                            )
                          : null}
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group mt-4">
                            <input
                              type="text"
                              className="text-field-modal"
                              placeholder="Enter OTP"
                              name="otp"
                              // value={otp}
                              onChange={formik.handleChange}
                              // onChange={(e) => setOtp(e.target.value)}
                            />
                          </div>
                          <div className="mt-5">
                            <input
                              type="submit"
                              // onClick
                              value={"CONTINUE"}
                              className="btn modal-button"
                            />
                            <ToastContainer autoClose={1000} hideProgressBar />
                          </div>
                          <div className="mt-4 d-flex flex-column">
                            <p className="text-center weight-600 dashboard-modal-p">
                              Did not get OTP?
                            </p>
                            <button
                              href="#"
                              className="text-green no-decor text-center mt-2"
                            >
                              Resend OTP
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </>
          )}
        </ModalBox>
      </ModalWithTransitionStyles>
    </>,
    document.getElementById("portal")
  );
};

// export default ;

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  bvnReg: usersActions.bvnReg,
  confirmBvnReg: usersActions.confirmBvnReg,
};

export default connect(mapStateToProps, actionCreators)(Modal1);

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
  opacity: 0.96;
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
