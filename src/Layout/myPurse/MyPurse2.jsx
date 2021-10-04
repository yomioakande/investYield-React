import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
const MyPurse2 = () => {
  const location = useLocation();
  const link = location.pathname.split("/");
  let name = link[link.length - 1];
  name = name === "Custom" ? "" : name;

  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState("");

  const initialValues = {
    name: `${name} Cash`,
    ccyCode: "",
    startDate: "",
    crFreq: "",
    amount: "",
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("A Purse Name is Required"),
    ccyCode: Yup.string().required("Select your preferred Currency"),
    crFreq: Yup.string().required("Select your preferred Frequency options"),
    startDate: Yup.string().required("Enter a Date"),
    amount: Yup.string().required("Enter your preferred Amount"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true);
    const obj = {
      name: values.name,
      ccyCode: values.ccyCode,
      startDate: values.startDate,
      crFreq: values.crFreq,
      amount: values.amount,
    };
    console.log(obj);
    sessionStorage.setItem("purseObj1", JSON.stringify(obj));
    window.location.href = `/app/savings/pursestep2/${name}`;
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    setLoading(false);
  };

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  useEffect(() => {
    formik.setFieldValue("amount", num?.value);
    // eslint-disable-next-line
  }, [num?.value]);

  console.log("reform", formik.values);

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
                            {/* <div className="w-auto">
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
                            </div> */}
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
                            min={disablePastDate()}
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
                            How often would you like to save in this purse?
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
                            How much will you like to save?
                          </label>
                          <NumberFormat
                            isNumericString={true}
                            thousandSeparator={true}
                            // type="number"
                            className="text-field"
                            placeholder="Amount (N)"
                            name="amount"
                            // value={formik.values.amount}
                            onValueChange={(values) => {
                              setNum({ value: values.value });
                            }}
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
