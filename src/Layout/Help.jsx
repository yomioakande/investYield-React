import React, { useState } from "react";
import Congrats from "./Congrats";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";

const Help = (props) => {
  // eslint-disable-next-line
  const [active, setActive] = useState("1");
  const [congratsModal, setCongratsModal] = useState(false);

  const modalToggle1 = () => {
    setCongratsModal(true);
  };

  const initialValues = {
    frequency: "",
    mEarn: "",
    mExp: "",
    savingPercent: "",
    isSaving: "",
    projection: "",
  };

  const validationSchema = Yup.object({
    frequency: Yup.number().required("Frequency is Required"),
    mEarn: Yup.number().required("Your monthly earnings is Required"),
    mExp: Yup.string().required("Your monthly expenses is Required"),
    savingPercent: Yup.number().required(
      "Your monthly savings option is required"
    ),
    isSaving: Yup.string().required("This field is required"),
    projection: Yup.number().required("Your projection is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      frequency: values.frequency,
      mEarn: values.mEarn,
      mExp: values.mExp,
      savingPercent: values.savingPercent,
      isSaving: values.isSaving,
      projection: values.projection,
    };

    console.log(obj);

    props.postFeedBack(obj, "/api/v1/util/feedback", modalToggle1);
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.values);

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h3 className="text-blue">Let’s help you save better</h3>
                  <div className="small-red-line"></div>
                  <div className="mt-5">
                    <>
                      <button type="button" onClick={() => modalToggle1()}>
                        Test Here
                      </button>
                      <form onSubmit={formik.handleSubmit}>
                        {active === "1" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  How frequently do you think of saving money?
                                </label>
                                <div className="form-group">
                                  <input
                                    type="radio"
                                    name="frequency"
                                    className="styled-checkbox"
                                    id="styled-checkbox-1"
                                    value={1}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-1">
                                    Daily
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    type="radio"
                                    name="frequency"
                                    className="styled-checkbox"
                                    id="styled-checkbox-2"
                                    value={7}
                                    onChange={formik.handleChange}
                                    // checked={formik.values.ccyCode === 7}
                                  />
                                  <label htmlFor="styled-checkbox-2">
                                    Weekly
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="frequency"
                                    className="styled-checkbox"
                                    id="styled-checkbox-3"
                                    type="radio"
                                    value={30}
                                    onChange={formik.handleChange}
                                    // checked={formik.values.ccyCode === 30}
                                  />
                                  <label htmlFor="styled-checkbox-3">
                                    Monthly
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="frequency"
                                    className="styled-checkbox"
                                    id="styled-checkbox-4"
                                    type="radio"
                                    value={90}
                                    onChange={formik.handleChange}
                                    // checked={formik.values.ccyCode ===90}
                                  />
                                  <label htmlFor="styled-checkbox-4">
                                    Quarterly
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="frequency"
                                    className="styled-checkbox"
                                    id="styled-checkbox-5"
                                    type="radio"
                                    value={0}
                                    onChange={formik.handleChange}
                                    // checked={formik.values.ccyCode === 0}
                                  />
                                  <label htmlFor="styled-checkbox-5">
                                    Never
                                  </label>
                                </div>
                              </div>
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-5">
                                  <div className="">
                                    <button
                                      type="button"
                                      onClick={() => setActive("2")}
                                      className="btn login-submit"
                                    >
                                      NEXT
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {formik.touched.frequency &&
                              formik.errors.frequency && (
                                <p className="text-danger font-sm error1 font-weight-bold">
                                  {formik.errors.frequency}
                                </p>
                              )}
                          </>
                        ) : active === "2" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  How much do you earn monthly in Naira?
                                </label>
                                <div className="form-group">
                                  <input
                                    name="mEarn"
                                    className="styled-checkbox"
                                    id="styled-checkbox-e1"
                                    type="radio"
                                    value={1}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-e1">
                                    &#8358; 100,000
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mEarn"
                                    className="styled-checkbox"
                                    id="styled-checkbox-e2"
                                    type="radio"
                                    value={2}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-e2">
                                    &#8358; 100,000 - 250,000
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mEarn"
                                    className="styled-checkbox"
                                    id="styled-checkbox-e3"
                                    type="radio"
                                    value={3}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-e3">
                                    &#8358; 251,000 - 500,000
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mEarn"
                                    className="styled-checkbox"
                                    id="styled-checkbox-e4"
                                    type="radio"
                                    value={4}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-e4">
                                    &#8358; 501,000 - 1,000,000
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mEarn"
                                    className="styled-checkbox"
                                    id="styled-checkbox-e5"
                                    type="radio"
                                    value={5}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-e5">
                                    &#8358; 1,000,000
                                  </label>
                                </div>
                              </div>
                              {formik.touched.mEarn && formik.errors.mEarn && (
                                <p className="text-danger font-sm error1 font-weight-bold">
                                  {formik.errors.mEarn}
                                </p>
                              )}
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("1")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("3")}
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : active === "3" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What percentage of your monthly pay do you
                                  spend on expenses monthly?
                                </label>
                                <div className="form-group">
                                  <input
                                    type="radio"
                                    name="mExp"
                                    className="styled-checkbox"
                                    id="styled-checkbox-f1"
                                    value={1}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-f1">
                                    &#60; 10%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mExp"
                                    className="styled-checkbox"
                                    id="styled-checkbox-f2"
                                    type="radio"
                                    value={2}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-f2">
                                    11 - 25%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mExp"
                                    className="styled-checkbox"
                                    id="styled-checkbox-f3"
                                    type="radio"
                                    value={3}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-f3">
                                    26 - 50%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mExp"
                                    className="styled-checkbox"
                                    id="styled-checkbox-f4"
                                    type="radio"
                                    value={4}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-f4">
                                    51 - 80%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="mExp"
                                    className="styled-checkbox"
                                    id="styled-checkbox-f5"
                                    type="radio"
                                    value={5}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-f5">
                                    100%
                                  </label>
                                </div>
                              </div>
                              {formik.touched.mExp && formik.errors.mExp && (
                                <p className="text-danger font-sm error1 font-weight-bold">
                                  {formik.errors.mExp}
                                </p>
                              )}
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("2")}
                                        className="btn text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        className="btn login-submit"
                                        onClick={() => setActive("4")}
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : active === "4" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What percentage of your montly pay do you
                                  think you can save?
                                </label>
                                <div className="form-group">
                                  <input
                                    type="radio"
                                    name="savingPercent"
                                    className="styled-checkbox"
                                    id="styled-checkbox-g1"
                                    value={10}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-g1">
                                    10%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="savingPercent"
                                    className="styled-checkbox"
                                    id="styled-checkbox-g2"
                                    type="radio"
                                    value={25}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-g2">
                                    25%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="savingPercent"
                                    className="styled-checkbox"
                                    id="styled-checkbox-g3"
                                    type="radio"
                                    value={50}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-g3">
                                    50%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="savingPercent"
                                    className="styled-checkbox"
                                    id="styled-checkbox-g4"
                                    type="radio"
                                    value={75}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-g4">
                                    75%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="savingPercent"
                                    className="styled-checkbox"
                                    id="styled-checkbox-g5"
                                    type="radio"
                                    value={90}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-g5">
                                    90%
                                  </label>
                                </div>
                              </div>
                              {formik.touched.savingPercent &&
                                formik.errors.savingPercent && (
                                  <p className="text-danger font-sm error1 font-weight-bold">
                                    {formik.errors.savingPercent}
                                  </p>
                                )}
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("3")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("5")}
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : active === "5" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  Do you think you are saving enough money
                                  towards your retirement?
                                </label>
                                <div className="form-group">
                                  <input
                                    name="isSaving"
                                    className="styled-checkbox"
                                    id="styled-checkbox-h1"
                                    type="radio"
                                    value={true}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-h1">
                                    Yes
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="isSaving"
                                    className="styled-checkbox"
                                    id="styled-checkbox-h2"
                                    type="radio"
                                    value={false}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-h2">No</label>
                                </div>
                              </div>
                              {formik.touched.isSaving &&
                                formik.errors.isSaving && (
                                  <p className="text-danger font-sm error1 font-weight-bold">
                                    {formik.errors.isSaving}
                                  </p>
                                )}
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("4")}
                                        className="btn text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("6")}
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : active === "6" ? (
                          <>
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What is your networth growth projection in 12
                                  months from now?
                                </label>
                                <div className="form-group">
                                  <input
                                    name="projection"
                                    className="styled-checkbox"
                                    id="styled-checkbox-i1"
                                    type="radio"
                                    value={15}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-i1">
                                    15%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="projection"
                                    className="styled-checkbox"
                                    id="styled-checkbox-i2"
                                    type="radio"
                                    value={30}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-i2">
                                    30%
                                  </label>
                                </div>
                                <div className="form-group mt-i1">
                                  <input
                                    name="projection"
                                    className="styled-checkbox"
                                    id="styled-checkbox-i3"
                                    type="radio"
                                    value={60}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-i3">
                                    60%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="projection"
                                    className="styled-checkbox"
                                    id="styled-checkbox-i4"
                                    type="radio"
                                    value={85}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-i4">
                                    85%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="projection"
                                    className="styled-checkbox"
                                    id="styled-checkbox-i5"
                                    type="radio"
                                    value={100}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="styled-checkbox-i5">
                                    100%
                                  </label>
                                </div>
                              </div>
                              {formik.touched.projection &&
                                formik.errors.projection && (
                                  <p className="text-danger font-sm error1 font-weight-bold">
                                    {formik.errors.projection}
                                  </p>
                                )}
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        type="button"
                                        onClick={() => setActive("5")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="submit"
                                        disabled={
                                          !formik.isValid || formik.isSubmitting
                                        }
                                        className="btn login-submit"
                                        value="NEXT"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </form>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {congratsModal && (
        <Congrats
          headline1={"Fantastic!"}
          headline2={"Thank you for the Feedback"}
          content={""}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  // const loading = state.authentication.loading;
  return { alert, username };
};

const actionCreators = {
  postFeedBack: usersActions.postFeedBack,
};

export default connect(mapStateToProps, actionCreators)(Help);
