import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import leftArrow from "../../assets/images/left-arrow.svg"
import "../../assets/css/style.css"
import { Link } from "react-router-dom";


import { connect } from "react-redux";
// import { fetchUsers } from "../redux";


const First = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    referral: "",
  };

  const [state, setState] = useState(initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "FirstName is too short!")
      .max(50, "FirstName is too Long!")
      .required("FirstName is Required"),
    lastName: Yup.string()
      .min(2, "LastName is too Short!")
      .max(50, "Last Name is too Long!")
      .required("LastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    phoneNumber: Yup.string()
      .min(2, "UserName is too Short!")
      .max(50, "UserName is too Long!")
      .required("UserName is Required"),
    dob: Yup.string().required("Date of Birth Required"),
    referral: Yup.string().min(
      5,
      "Password is too short - should be 5 chars minimum."
    ),
  });

  const handleSubmit = () => {};
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    // handleSubmit(values);
   
    onSubmitProps.resetForm();
    onSubmitProps.setSubmiting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log("formikvalues", formik.values);
  console.log(state,setState,handleSubmit)
  //  const obj= {
  //   "firstName": formik.values.firstName,
  //   "lastName": formik.values.firstName,
  //   "email": formik.values.firstName,
  //   "phoneNumber": formik.values.firstName,
  //   "dob":formik.values.firstName,
  // //   "dob": "2021-08-27T00:16:51.755Z",
  //   "platform": {
  //     "source": "string",
  //     "id": "string"
  //   },
  //   "referral": formik.values.firstName
  // }

  return (
    <main>
      <section className="bg-light-blue reg-section">
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-xl-4">
              <div className="bg-white login-div p-5 shadow mt-5">
                <div className="d-flex justify-content-between">
                  <Link to="/auth/login" className="d-flex no-decor align-items-center">
                    <img
                      src={leftArrow}
                      className="img-fluid"
                      alt="left-arrow"
                    />
                    <span className="px-2 text-dark">Back</span>
                  </Link>
                  <h5 className="login-div-header">Get Started</h5>
                  <h5 className="step-text">1/4</h5>
                </div>
                <div className="mt-4">
                  <h6 className="reg-p text-center mb-3">
                    Create an account, start saving and yielding.
                  </h6>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                     
                        {...formik.getFieldProps("firstName")}
                        className="text-field"
                        placeholder="First Name"
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-danger error1 font-weight-bold">
                          {formik.errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        name="lastName"
                      
                        {...formik.getFieldProps("lastName")}
                        className="text-field"
                        placeholder="Last Name"
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-danger error1 font-weight-bold">
                          {formik.errors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        name="email"
                    
                        {...formik.getFieldProps("email")}
                        className="text-field"
                        placeholder="Email Address"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-danger error1 font-weight-bold">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        name="phoneNumber"
                     
                        {...formik.getFieldProps("phoneNumber")}
                        className="text-field"
                        placeholder="Phone Number"
                      />
                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <p className="text-danger error1 font-weight-bold">
                            {formik.errors.phoneNumber}
                          </p>
                        )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="date"
                        name="dob"
                      
                        {...formik.getFieldProps("dob")}
                        className="text-field"
                        placeholder="Email Address"
                      />
                      {formik.touched.dob && formik.errors.dob && (
                        <p className="text-danger error1 font-weight-bold">
                          {formik.errors.dob}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        name="referral"
                    
                        {...formik.getFieldProps("referral")}
                        className="text-field"
                        placeholder="Referral Code (Optional)"
                      />
                    </div>
                    <div className="form-group mt-5">
                      <input
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                        className="btn login-submit"
                        value="NEXT"
                      />
                    </div>
                    <div className="mt-2">
                      <p>
                        Already have an account?{" "}
                        <span>
                          <Link to="/auth/login" className="text-green">
                            Get started here
                          </Link>
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default First;
