import React, { useState } from "react";
// import {Link} from "react-router-dom"
import * as Yup from "yup";
import { addAsterik } from "../../helpers";
import { useFormik } from "formik";
const Otp = () => {
  const getNumber = JSON.parse(sessionStorage.getItem("number")) || null;
  //eslint-disable-next-line
  const [number, setNumber] = useState(addAsterik(getNumber));
  const initialValues = {
    token: "",
  };

  const onSubmit = (values, onSubmitProps) => {};

  const validationSchema = Yup.object({
    token: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.values)

  return (
    <>
      <main>
        <section className="reg-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-xl-4" style={{maxWidth:"50%", flex:"0%"}}>
                <div className="bg-white login-div p-5 shadow mt-5">
                  {/* <div className="d-flex justify-content-between">
                  <Link
                    to="/auth/signup1"
                    className="d-flex no-decor align-items-center"
                  >
                    <img
                      // src={leftArrow}
                      className="img-fluid"
                      alt="left-arrow"
                    />
                    <span className="px-2 text-dark">Back</span>
                  </Link>
                  <h5 className="login-div-header">Get Started</h5>
                  <h5 className="step-text">2/4</h5>
                </div> */}
                  <div className="mt-5">
                    <h6 className="reg-p mb-3">
                      Please enter the One-Time Password (OTP) that has been
                      sent to your phone number
                      {/* <span className="reg-p-number"> {number} </span> */}
                    </h6>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        {alert.message && (
                          <div className={`font-sm alert ${alert.type}`}>
                            {alert.message}
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
                          disabled={!formik.isValid || formik.isSubmitting}
                          className="btn login-submit"
                          value="NEXT"
                        />
                      </div>
                      <div className="mt-4">
                        <h6 className="reg-p text-center">
                          Did not get an OTP?
                        </h6>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-resend-otp">
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
      </main>
    </>
  );
};

export default Otp;
