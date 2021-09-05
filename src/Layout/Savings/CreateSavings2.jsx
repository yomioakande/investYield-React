import React, { useState } from "react";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import "../../assets/css/theme.css";
import "../../assets/css/checkBox.css";
import "../../assets/css/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateSavings2 = ({ username, register }) => {
  const location = useLocation();
  const link = location.pathname.split("/");
  let name = link[link.length - 1];
  name = name === "Create" ? "" : name;
  username = username.name.split(" ")[0];

  const initialValues = {
    name: "",
    ccyCode: "",
    target: "",
    startDate: "",
    endDate: "",
  };

  // {
  //   1"name": "string",
  //   1"ccyCode": 0,
  //   *"isAutomated": true,
  //   2"earnInterest": true,
  //   2"frequency": 0,
  //   2"amount": 0,
  //   1"target": 0, 
  //   1"endDate": "2021-08-30T23:27:32.168Z",
  //   2"imageRef": "string"
  // }
  const [loading, setloading] = useState(false);
  const [state, setState] = useState(initialValues);

  const validationSchema = Yup.object({
    name: Yup.string().required("A plan Name is Required"),
    ccyCode: Yup.string().required("A plan Name is Required"),
    lastName: Yup.string().required("Pick the Currency to save in"),
    target: Yup.string().required("A target amount is required"),
    startDate: Yup.string().required("Enter a Date"),
    endDate: Yup.string().required("Enter a Date"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      name: formik.values.name,
      ccyCode: formik.values.ccyCode,
      target: formik.values.target,
      startDate: formik.values.startDate,
      endDate: formik.values.endDate,
    };
    localStorage.setItem("savingsInfo", JSON.stringify(obj));
    window.location.href = "/app/savings/create3";
    // register(obj, "/api/v1/identity/register", "/auth/signup2");
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    {`Let’s help you save for a new ${name} plan`}
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue font-sm">
                            Start your goal with a befitting name
                          </label>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="text-field-profile"
                              name={"name"}
                              onChange={formik.handleChange}
                              // {...formik.getFieldProps("name")}
                              placeholder={`e.g ${username}'s ${name} plan`}
                            />
                            <label
                              for="firstName"
                              className="font-sm position-absolute"
                              style={{ left: "15px", top: "15%" }}
                            >
                              Goal Name
                            </label>
                          </div>
                        </div>
                        <div class="mt-4">
                          <label class="text-blue weight-500">
                            What currency would you like to save in?
                          </label>
                          <div class="row">
                            <div class="col-lg-6 col-xl-4">
                              <div class="form-group">
                                <label class="radio">
                                  <input
                                    type="radio"
                                    name="ccyCode"
                                    // checked={formik.values.ccyCode === 2}
                                    value={"2"}
                                    onChange={formik.handleChange}
                                    // {...formik.getFieldProps("ccyCode")}
                                  />
                                  <span class="w-100 text-center">
                                    $US Dollars
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-6 col-xl-4">
                              <div class="form-group">
                                <label class="radio">
                                  <input
                                    type="radio"
                                    name="ccyCode"
                                    // checked={formik.values.ccyCode === 1}
                                    value={"1"}
                                    onChange={formik.handleChange}
                                    // {...formik.getFieldProps("ccyCode")}
                                  />
                                  <span class="text-center">₦ Naira</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <label for="Amount" className="text-blue weight-500">
                            Set a target amount for your {name} goal
                          </label>
                          <input
                            type="text"
                            className="text-field"
                            name={"target"}
                            // value={}
                            onChange={formik.handleChange}
                            // {...formik.getFieldProps("target")}
                            placeholder="Target Amount"
                          />
                        </div>

                        <div className="form-group">
                          <h5 className="text-blue">Choose a start date</h5>
                          <input
                            type="date"
                            className="text-field mt-2"
                            name={"startDate"}
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <h5 className="text-blue">Choose a target date</h5>
                          <input
                            type="date"
                            className="text-field mt-2"
                            value={formik.values.endDate}
                            name={"endDate"}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button className="btn btn-previous text-green">
                                  PREVIOUS
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <input
                                  type="submit"
                                  // onClick={()=>alert('err')}
                                  // disabled={
                                  //   !formik.isValid || formik.isSubmitting
                                  // }
                                  className="btn login-submit"
                                  value="NEXT"
                                />
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

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(CreateSavings2);

// export default ;
