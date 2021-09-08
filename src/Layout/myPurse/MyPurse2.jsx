import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MyPurse2 = () => {
  // "name": "string",
  // "ccyCode": 0,
  // "isAutomated": true,
  // "startDate": "2021-09-06T14:55:34.882Z",
  // "crFreq": 0, how often will you like members to save
  // "amount": 0, how much will you like to save daily
  // "autoWithdraw": tr  ue,
  // "drDateOpt": true,
  // "drDate": "2021-09-06T14:55:34.882Z",
  // "drFreq": 0,
  // "drPct": 0

  // const initialValues2 = {
  //     autoWithdraw:"",
  //     drFreq:"",
  //     DrDate:"",
  //     drPct: 0,
  //     DrDateOpt:"",
  //     isAutomated: "",

  //   };

  const initialValues = {
    name: "",
    ccyCode: "",
    startDate: "",
    crFreq: "",
    amount: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("A Plan Name is Required"),
    ccyCode: Yup.string().required("Select your preferred Currency"),
    crFreq: Yup.string().required("Select your preferred Frequency options"),
    startDate: Yup.string().required("Enter a Date"),
    amount: Yup.string().required("Enter your preferred Amount"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      name: values.name,
      ccyCode: values.ccyCode,
      startDate: values.startDate,
      crFreq: values.crFreq,
      amount: values.amount,
    };
    console.log(obj);
    localStorage.setItem("purseObj1", JSON.stringify(obj));
    window.location.href = "/app/savings/pursestep2";
    onSubmitProps.resetForm();
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
                  <h4 className="text-blue">Let’s get your Purse set up</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue">
                            Give your purse a befitting name
                          </label>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="text-field-profile"
                              name={"name"}
                              onChange={formik.handleChange}
                              {...formik.getFieldProps("name")}
                              placeholder="e.g Shopping Cash"
                            />
                            <label
                              for="firstName"
                              className="font-sm position-absolute"
                              style={{ left: "15px", top: "15%" }}
                            >
                              Goal Name
                            </label>
                          </div>
                          {formik.touched.name && formik.errors.name && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.name}
                            </p>
                          )}
                        </div>
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            What currency would you like to save in?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio1"
                                    type="radio"
                                    name="ccyCode"
                                    value={"2"}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio1">
                                    <span>$ US Dollars</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio2"
                                    name="ccyCode"
                                    value={"1"}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                  <label for="radio2">
                                    <span>₦ Naira</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {formik.touched.ccyCode && formik.errors.ccyCode && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.ccyCode}
                            </p>
                          )}
                        </div>
                        <div className="form-group mt-4">
                          <label className="text-blue">
                            Choose a start date
                          </label>
                          <input
                            type="date"
                            className="text-field mt-2"
                            name={"startDate"}
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                          />
                        </div>
                        {formik.touched.startDate &&
                          formik.errors.startDate && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.startDate}
                            </p>
                          )}
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            How often would you like members to save?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio11"
                                    type="radio"
                                    name="crFreq"
                                    value={1}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio11">
                                    <span>Daily</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio12"
                                    name="crFreq"
                                    value={7}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                  <label for="radio12">
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
                                    name="crFreq"
                                    value={30}
                                    onChange={formik.handleChange}
                                    type="radio"
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
                                    name="crFreq"
                                    value={0}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                  <label for="radio4">
                                    <span>One Time</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {formik.touched.crFreq && formik.errors.crFreq && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.crFreq}
                          </p>
                        )}
                        <div className="form-group mt-4">
                          <label for="Amount" className="text-blue weight-500">
                            How much will you like to save daily?
                          </label>
                          <input
                            type="number"
                            className="text-field"
                            placeholder="Amount (N)"
                            name="amount"
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            {...formik.getFieldProps("amount")}
                          />
                        </div>
                        {formik.touched.amount && formik.errors.amount && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.amount}
                          </p>
                        )}
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-4">
                            <div className="">
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

export default MyPurse2;
