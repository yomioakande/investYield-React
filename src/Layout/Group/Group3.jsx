import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Group3 = () => {
  const initialValues = {
    start: "",
    freq: "",
    cntr_amt: "",
    earn: "",
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter a Plan name"),
    ccy: Yup.string().required("Select a Currrency Type"),
    target: Yup.string().required("A target amount is required"),
    tgtDate: Yup.string().required("Enter a Date"),
    // endDate: Yup.string().required("Enter a Date"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // eslint-disable-next-line
    const obj = {
      start: values.name,
      freq: values.ccyCode,
      cntr_amt: values.target,
      earn: values.startDate,
    };
    // sessionStorage.setItem("groupInfo", JSON.stringify(obj));
    // window.location.href = "/app/savings/create3";
    // onSubmitProps.resetForm();
    // onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
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
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Decide how you want the group to save
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        <label className="text-blue">Choose a start date</label>
                        <input
                          type="date"
                          min={disablePastDate()}
                          name="start"
                          {...formik.getFieldProps("start")}
                          className="text-field mt-2"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How often would you like members to save?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio1"
                                  type="radio"
                                  name="freq"
                                  value={1}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio1">
                                  <span>Daily</span>
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
                                  name="freq"
                                  value={7}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio2">
                                  <span>Weekly</span>
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
                                  id="radio3"
                                  type="radio"
                                  name="freq"
                                  value={30}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio3">
                                  <span>Monthly</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio4"
                                  type="radio"
                                  name="freq"
                                  value={0}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio4">
                                  <span>One Time</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          Would you like members to earn interest?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-yes"
                                  name="earn"
                                  value={30}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("earn")}
                                  type="radio"
                                />
                                <label for="radio-earn-yes">
                                  <span>Yes, I would</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-no"
                                  type="radio"
                                  name="earn"
                                  value={30}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("earn")}
                                />
                                <label for="radio-earn-no">
                                  <span>No, I don’t want interest</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label className="text-blue">
                          The amount for members to save daily to meet the
                          target amount at the target date is:
                        </label>
                        <div className="form-group position-relative">
                          <input
                            type="text"
                            className="text-field-profile"
                            name="freq"
                            value="cntr_amt"
                            {...formik.getFieldProps("cntr_amt")}
                            readonly
                          />
                          <label
                            for="firstName"
                            className="font-sm position-absolute"
                            style={{ left: "15px", top: "15%" }}
                          >
                            Amount
                          </label>
                        </div>
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
                              <Link
                                to="/app/groupsavings4"
                                className="btn login-submit"
                              >
                                NEXT
                              </Link>
                              {/* <button className="btn login-submit">NEXT</button> */}
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

export default Group3;
