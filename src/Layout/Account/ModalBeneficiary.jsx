import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactDom from "react-dom";
import modalclose from "../../assets/images/modal-close.svg";
import Modal from "./Modal2";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

const ModalBeneficiary = ({
  dataInfo,
  loading,
  alertType,
  message,
  modalBenf,
  close,
}) => {
  const [active, setActive] = useState("1");
  const [modal, setModal] = useState(false);
  const [showError, setShowError] = useState(true);

  const initialValues = {
    identifier: "",
  };

  const validationSchema = Yup.object({
    identifier: Yup.string().required("This field is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setShowError(true);
    const obj = {
      identifier: values.identifier,
      type: values.identifier.split("").includes("@") ? "0" : "1",
    };

    modalBenf(obj, "/api/v1/user/resolve_beneficiary", setModal);
    // onSubmitProps.resetForm();
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
    }, 3000);
  };

  //true
  return ReactDom.createPortal(
    <>
      {loading && <Loader />}
      {modal === false ? (
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
                    <div className="modal-body p-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="text-blue">Add beneficiary</h3>
                          <div className="small-red-line"></div>
                          <form onSubmit={formik.handleSubmit} className="mt-5">
                            {showError
                              ? message && (
                                  <div className={`font-sm ${alertType}`}>
                                    {message}
                                  </div>
                                )
                              : null}
                            {active === "0" ? (
                              <>
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="text-field"
                                    name="identifier"
                                    {...formik.getFieldProps("identifier")}
                                    placeholder="Enter beneficiary email"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setActive("1")}
                                  className="text-green text-left font-sm"
                                  style={{
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                  }}
                                >
                                  Use Phone Number
                                </button>
                              </>
                            ) : active === "1" ? (
                              <>
                                <div className="form-group">
                                  <input
                                    type="tel"
                                    className="text-field"
                                    autoComplete="off"
                                    name="identifier"
                                    {...formik.getFieldProps("identifier")}
                                    placeholder="Enter beneficiary phone number starting with +234"
                                  />
                                </div>

                                <button
                                  type="button"
                                  onClick={() => setActive("0")}
                                  className="text-green text-left font-sm"
                                  style={{
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                  }}
                                >
                                  Use Email Address
                                </button>
                              </>
                            ) : null}

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
                                    <input
                                      type="submit"
                                     className="btn login-submit"
                                      value="NEXT"
                                    />
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
        </OVERLAY>
      ) : (
        <Modal dataInfo={dataInfo} close={close} />
      )}
    </>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => {
  const { loggingIn, loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  modalBenf: usersActions.postFeedBack,
};

export default connect(mapStateToProps, actionCreators)(ModalBeneficiary);

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
