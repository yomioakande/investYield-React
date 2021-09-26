import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import percentageIcon from "../../assets/images/percentageIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";

const MyPurse3 = () => {
  const location = useLocation();
  const link = location.pathname.split("/");
  let name = link[link.length - 1];
  name = name === "Custom" ? "" : name;

  const [loading, setLoading] = useState(false);
  const initialValues = {
    autoWithdraw: "",
    drFreq: "0",
    drDate: "",
    drPct: "",
  };

  const validationSchema = Yup.object({
    autoWithdraw: Yup.string().required("A Plan Name is Required"),
    drFreq: Yup.string().when("autoWithdraw", {
      is: "true",
      then: Yup.string().required("Choose a Date"),
    }),
    drDate: Yup.string().when("drFreq", {
      is: "001",
      then: Yup.string().required("Choose a Date"),
    }),
    drPct: Yup.string().when("autoWithdraw", {
      is: "true",
      then: Yup.string().required("Choose or Enter Percentage"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true);
    const obj = {
      autoWithdraw: values.autoWithdraw,
      drFreq: values.drFreq,
      drDate: values.drDate,
      drDateOpt:
        values.drFreq !== "001" ? false : values.drDate !== "" ? true : false,
      drPct: values.drPct,
      isAutomated: true,
    };
    const firstObj = JSON.parse(sessionStorage.getItem("purseObj1"));
    const purseMainObj = { ...firstObj, ...obj };
    // console.log(purseMainObj);
    sessionStorage.setItem("mainPurseObj", JSON.stringify(purseMainObj));
    window.location.href = "/app/savings/pursestep3";
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.values);
  // console.log()

  const auto = formik.values.autoWithdraw;
  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">{`Let’s get your ${name} Purse set up`}</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <div className="">
                          <label className="text-blue weight-500">
                            Would you like to opt in for automatic withdrawal?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio1"
                                    type="radio"
                                    name="autoWithdraw"
                                    value={true}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio1">
                                    <span>Yes, I would</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio2"
                                    type="radio"
                                    name="autoWithdraw"
                                    value={false}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio2">
                                    <span>No, I am not interested</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {auto === "true" ? (
                          <>
                            {" "}
                            <div className="mt-4">
                              <label className="text-blue weight-500">
                                How often would you like to withdraw?
                              </label>
                              <div className="row cg-3 px-3">
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio3"
                                        name="drFreq"
                                        value={7}
                                        onChange={formik.handleChange}
                                        type="radio"
                                      />
                                      <label for="radio3">
                                        <span>Every week</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio4"
                                        name="drFreq"
                                        value={14}
                                        onChange={formik.handleChange}
                                        type="radio"
                                      />
                                      <label for="radio4">
                                        <span>Every two weeks</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio7"
                                        name="drFreq"
                                        value={30}
                                        onChange={formik.handleChange}
                                        type="radio"
                                      />
                                      <label for="radio7">
                                        <span>Every month</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radiov7"
                                        name="drFreq"
                                        value={"001"}
                                        onChange={formik.handleChange}
                                        type="radio"
                                      />
                                      <label for="radiov7">
                                        <span>Let me chooses a date</span>
                                      </label>
                                    </div>
                                    {formik.values.drFreq === "001" ? (
                                      <div className="form-group">
                                        <h5 className="text-blue">
                                          Choose a start date
                                        </h5>
                                        <input
                                          type="date"
                                          className="text-field mt-2"
                                          name={"drDate"}
                                          value={formik.values.drDate}
                                          onChange={formik.handleChange}
                                        />
                                        {formik.touched.drDate &&
                                          formik.errors.drDate && (
                                            <p className="text-danger font-sm error1 font-weight-bold">
                                              {formik.errors.drDate}
                                            </p>
                                          )}
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <label className="text-blue weight-500">
                                What percentage would you like to withdraw?
                              </label>
                              <div className="row cg-3 px-3">
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio3a"
                                        name="drPct"
                                        type="radio"
                                        value={20}
                                        onChange={formik.handleChange}
                                      />
                                      <label for="radio3a">
                                        <span>20%</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio3b"
                                        name="drPct"
                                        type="radio"
                                        value={60}
                                        onChange={formik.handleChange}
                                      />
                                      <label for="radio3b">
                                        <span>60%</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row cg-3 px-3">
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio3c"
                                        name="drPct"
                                        type="radio"
                                        value={100}
                                        onChange={formik.handleChange}
                                      />
                                      <label for="radio3c">
                                        <span>100%(All at once)</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-auto">
                                  <div className="form-group">
                                    <div className="pay-method-radio">
                                      <input
                                        id="radio3d"
                                        name="drPct"
                                        type="radio"
                                        value={"0"}
                                        onChange={formik.handleChange}
                                      />
                                      <label for="radio3d">
                                        <span>Let me specify</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group mt-4 position-relative">
                                <input
                                  type="text"
                                  className="text-field"
                                  placeholder="Specify the percentage"
                                  name="drPct"
                                  onChange={formik.handleChange}
                                />
                                <div
                                  className="position-absolute"
                                  style={{ right: "5%", top: "20%" }}
                                >
                                  <img
                                    src={percentageIcon}
                                    className="img-fluid"
                                    alt="percent"
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}

                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button className="btn btn-previous text-green">
                                  PREVIOUS
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <button className="btn login-submit">
                                  NEXT
                                </button>
                              </div>
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
    </>
  );
};

export default MyPurse3;
