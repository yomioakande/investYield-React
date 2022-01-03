import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Congrats from "../Congrats";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import Loader from "../../common/Loader";
const Otp = (props) => {
  const [congratsModal, setCongratsModal] = useState(false);
  const modalToggle1 = () => {
    setCongratsModal(true);
  };

  const initialValues = {
    token: "",
  };

  const getTransfer = JSON.parse(sessionStorage.getItem("transferObj")) || null;

  const onSubmit = (values) => {
    const obj = {
      token: values.token,
      transId: getTransfer?.challengeId,
    };
    // /api/v1/transfer/accountbycard
    props.confirmToken(obj, "/api/v1/transfer/savingswithdraw", modalToggle1);
  };

  const validationSchema = Yup.object({
    token: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const resendOtp = () => {
    const obj = {
      id: getTransfer?.challengeId,
      operationType: getTransfer?.transId ? 4 : 5,
    };
    props.resend(obj, "/api/v1/util/resendotp");
  };

  return (
    <>
      {props.alert.loading || (props.registration.loading && <Loader />)}
      <section className="reg-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-5 " style={{ flex: "0%" }}>
              <div className="bg-white login-div p-5 shadow mt-5">
                <div className="mt-5">
                  <h6 className="reg-p mb-3">
                    Please enter the One-Time Password (OTP) that has been sent
                    to your phone number
                  </h6>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mt-4">
                      {props.alert.message && (
                        <div className={`font-sm ${props.alert.type}`}>
                          {props.alert.message}
                        </div>
                      )}

                      {props.registration.message && (
                        <div
                          className={`font-sm ${props.registration.alertType}`}
                        >
                          {props.registration.message}
                        </div>
                      )}
                      <input
                        type="text"
                        className="text-field"
                        name="token"
                        {...formik.getFieldProps("token")}
                        placeholder="Enter OTP"
                      />
                      {formik.touched.token && formik.errors.token && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.token}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-50">
                      <input
                        type="submit"
                        className="btn login-submit"
                        value="NEXT"
                      />
                    </div>
                    <div className="mt-4">
                      <h6 className="reg-p text-center">Did not get an OTP?</h6>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => resendOtp()}
                        className="btn btn-resend-otp"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
      {congratsModal && <Congrats headline1={"Fantastic!"} headline2={""} />}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert, registration } = state;
  return { alert, registration };
};

const actionCreators = {
  confirmToken: usersActions.confirmBvnReg,
  resend: usersActions.resend,
};

export default connect(mapStateToProps, actionCreators)(Otp);
