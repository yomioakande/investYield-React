import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
const Group1 = () => {
  const location = useLocation();
  let groupType = location.pathname.split("/");
  groupType = groupType[groupType.length - 1];
  // console.log(groupType)
  //   "docId": "string",
  //   "isPublic": true

  const initialValues = {
    name: "",
    ccy: "",
    target: "",
    tgtDate: "",
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
  });

  const onSubmit = (values, onSubmitProps) => {
    // setloading(true);
    // eslint-disable-next-line
    const obj = {
      name: values.name,
      ccy: values.ccyCode,
      target: values.target,
      tgtDate: values.startDate,
      // endDate: values.endDate,
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
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Create a {groupType} savings group
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue">
                            Start your group with a befitting name
                          </label>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="text-field-profile"
                              placeholder="e.g Abuja Hikers"
                              name="name"
                              {...formik.getFieldProps("name")}
                            />
                            <label
                              for="firstName"
                              className="font-sm position-absolute"
                              style={{ left: "15px", top: "15%" }}
                            >
                              Group Name
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
                                    name="ccy"
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
                                    value={"1"}
                                    name="ccy"
                                    type="radio"
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio2">
                                    <span>₦ Naira</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {formik.touched.ccy && formik.errors.ccy && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.ccy}
                            </p>
                          )}
                        </div>
                        <div className="form-group mt-4">
                          <label className="text-blue">
                            Set a target amount for your home goal
                          </label>
                          <input
                            type="text"
                            className="text-field"
                            placeholder="Target amount"
                            name={"target"}
                            {...formik.getFieldProps("target")}
                          />
                          {formik.touched.target && formik.errors.target && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.target}
                            </p>
                          )}
                        </div>
                        <div className="form-group mt-4">
                          <label className="text-blue">
                            Choose a target date
                          </label>
                          <input
                            type="date"
                            min={disablePastDate()}
                            name={"tgtDate"}
                            {...formik.getFieldProps("tgtDate")}
                            className="text-field mt-2"
                          />
                          {formik.touched.tgtDate && formik.errors.tgtDate && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.tgtDate}
                            </p>
                          )}
                        </div>
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-4">
                            <div className="">
                              <Link
                                to="/app/groupsavings2"
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

export default Group1;
