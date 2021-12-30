import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import Loader from "../../common/Loader";
import Congrats from "../../Layout/Congrats";

const Fourth = (props) => {
  const [congratsModal1, setCongratsModal1] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const modalToggle2 = () => {
    setCongratsModal1(true);
    setTimeout(() => {
      history.push("/app/dashboard");
    }, 3000);
  };
  const initialValues = {
    pin: "",
    confirmPin: "",
  };

  const Schema = Yup.object().shape({
    pin: Yup.string().min(4).max(4).required("This field is required"),
    confirmPin: Yup.string()
      .min(4)
      .required("This field is required")
      .max(4)
      .when("pin", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("pin")],
          "Both Pin need to be the same"
        ),
      }),
  });

  const onSubmit = (values, onSubmitProps) => {
    setShowError(true);
    const obj = {
      pin: values.pin,
      platform: {
        source: "string",
        id: "string",
      },
    };
    props.register4(obj, "/api/v1/user/pin", modalToggle2);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnMount: true,
  });

  const later = () => {
    window.location.href = "/app/dashboard";
  };

  return (
    <>
      {props.loading && <Loader />}
      <main>
        <section class="bg-light-blue reg-section-pin">
          <div class="container-fluid px-0">
            <div class="d-flex justify-content-center">
              <div class="col-lg-4">
                <div class="bg-white login-div p-5 shadow my-80">
                  <div class="d-flex justify-content-between">
                    <a
                      href="/auth/signup3"
                      class="d-flex no-decor align-items-center"
                    >
                      <img src={leftArrow} class="img-fluid" alt="left-arrow" />
                      <span class="px-2 text-dark">Back</span>
                    </a>
                    <h5 class="login-div-header">Get Started</h5>
                    <h5 class="step-text">4/4</h5>
                  </div>
                  <div class="mt-4">
                    <h6 class="reg-p mb-3">
                      Create a 4-digit PIN for transactions on investYield.
                    </h6>
                    {showError
                      ? props.message && (
                          <div className={`font-sm ${props.alertType}`}>
                            {props.message}
                          </div>
                        )
                      : null}
                    <form onSubmit={formik.handleSubmit}>
                      <div class="form-group mt-3">
                        <input
                          type="password"
                          class="text-field"
                          placeholder="Create Pin"
                          name="pin"
                          {...formik.getFieldProps("pin")}
                          maxlength="4"
                          title="The Pin must be 4 characters"
                        />
                        {formik.touched.pin && formik.errors.pin && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.pin}
                          </p>
                        )}
                      </div>
                      <div class="form-group mt-3">
                        <input
                          type="password"
                          class="text-field"
                          placeholder="Confirm Pin"
                          maxlength="4"
                          name="confirmPin"
                          {...formik.getFieldProps("confirmPin")}
                        />
                        {formik.touched.confirmPin &&
                          formik.errors.confirmPin && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.confirmPin}
                            </p>
                          )}
                      </div>
                      <div class="form-group mt-5">
                        <input
                          type="submit"
                          className="btn login-submit"
                          value="NEXT"
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button onClick={() => later()} class="text-green">
                          I'll do this later
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
      {congratsModal1 && (
        <Congrats
          headline1={"Fantastic!"}
          headline2={" Sign up successfully completed"}
          content={
            "Welcome to smart money habits. You can now start creating savings plans to achieve those financial goals that are important to you."
          }
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, alertType, message } = state.registration;
  return { loading, alertType, message };
};

const actionCreators = {
  register4: usersActions.register4,
};

export default connect(mapStateToProps, actionCreators)(Fourth);
