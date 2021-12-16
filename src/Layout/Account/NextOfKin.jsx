import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import Swal from "sweetalert2";
const NextofKin = (props) => {
  // eslint-disable-next-line
  const [showError, setShowError] = useState(true);
  const [nokDetails, setNokDetails] = useState(true);
  const [showPassword1, setShowPassword1] = useState(false);

  async function dataInfo() {
    const data = await props.getNok("/api/v1/user/nextofkin").then();
    setNokDetails(data);
  }
  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  const initialValues = {
    firstName: nokDetails?.firstName,
    lastName: nokDetails?.lastName,
    email: nokDetails?.email,
    phoneNumber: nokDetails?.phoneNumber,
    state: nokDetails?.state,
    address: nokDetails?.address,
    password: nokDetails?.password,
  };

  const Schema = Yup.object({
    firstName: Yup.string().required("Enter your firstName"),
    lastName: Yup.string().required("Enter your  lastName"),
    email: Yup.string().required("Enter your Email"),
    phoneNumber: Yup.string().required("Enter your Phone Number"),
    state: Yup.string().required("Enter your State"),
    address: Yup.string().required("Enter your Address"),
    password: Yup.string().required("Enter your Password"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setShowError(true);
    const obj = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      state: values.state,
      address: values.address,
      password: values.password,
    };

    nokDetails
      ? props.putNok(obj, "/api/v1/user/nextofkin", success)
      : props.postNok(obj, "/api/v1/user/nextofkin", success);

    props.postNok(obj, "/api/v1/user/nextofkin", success);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    show();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnMount: true,
  });

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };
  // eslint-disable-next-line
  const success = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      position: "center",
      icon: "success",
      iconColor: "#003079",
      title: "Next of Kin Updated!",
      titleColor: "#fff",
      showConfirmButton: false,
      timer: 3000,
    });
    dataInfo();
  };

  return (
    <>
      {props.alert.loading && <Loader />}
      {/* {props.message ? (
        <div className={`font-sm ${props.alertType}`}>{props.message}</div>
      ) : null} */}

      {props.alert.message ? (
        <div className={`font-sm mt-3 ${props.alert.type}`}>
          {props.alert.message}
        </div>
      ) : null}

      <form onSubmit={formik.handleSubmit}>
        <div className="row mt-5">
          <div className="col-lg-3">
            <h5 className="mb-0 text-blue">Full Name</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group position-relative">
                  <input
                    type="text"
                    className="text-field-profile"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <label
                    for="firstName"
                    className="font-sm position-absolute"
                    style={{ left: "15px", top: "15%" }}
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group position-relative">
                  <input
                    type="text"
                    className="text-field-profile"
                    name="lastName"
                    {...formik.getFieldProps("lastName")}
                  />
                  <label
                    for="firstName"
                    className="font-sm position-absolute"
                    style={{ left: "15px", top: "15%" }}
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <h5 className="mb-0 text-blue">Contact Details</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group position-relative">
                  <input
                    type="email"
                    className="text-field-profile"
                    autoComplete="off"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  <label
                    for="firstName"
                    className="font-sm position-absolute"
                    style={{ left: "15px", top: "15%" }}
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group position-relative">
                  <input
                    type="text"
                    className="text-field-profile"
                    name="phoneNumber"
                    {...formik.getFieldProps("phoneNumber")}
                  />
                  <label
                    for="firstName"
                    className="font-sm position-absolute"
                    style={{ left: "15px", top: "15%" }}
                  >
                    Phone Number
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-3">
            <h5 className="mb-0 text-blue">Address Details</h5>
          </div>
          <div className="col-lg-9">
            <div className="form-group position-relative">
              <input
                type="text"
                className="text-field-profile"
                name="state"
                {...formik.getFieldProps("state")}
              />
              <label
                for="firstName"
                className="font-sm position-absolute"
                style={{ left: "15px", top: "15%" }}
              >
                State of Residence
              </label>
            </div>
            <div className="mt-3">
              <textarea
                className="textAreaProfile"
                placeholder="Address"
                name="address"
                {...formik.getFieldProps("address")}
              ></textarea>
            </div>

            <div className="form-group position-relative">
              <input
                type={`${showPassword1 ? "type" : "password"}`}
                className="text-field-profile"
                name="password"
                {...formik.getFieldProps("password")}
              />
              <i
                style={{
                  position: "absolute",
                  top: "1.1rem",
                  right: "2rem",
                  color: "#000",
                }}
                onClick={() => {
                  setShowPassword1(!showPassword1);
                }}
                className={`fas ${showPassword1 ? "fa-eye" : "fa-eye-slash"} `}
              ></i>
              <label
                for="password"
                className="font-sm position-absolute"
                style={{ left: "15px", top: "15%" }}
              >
                Password
              </label>
            </div>
          </div>
        </div>

        {nokDetails ? (
          <div className="row mt-4">
            <div className="col-lg-3">
              {/* <h5 className="mb-0">Can’t remember Password?</h5> */}
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-resend-otp">
                      UPDATE NEXT OF KIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row mt-4 justify-content-end">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn login-submit"
                      value="ADD NEXT OF KIN"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, alertType, message } = state.registration;
  const alert = state.alert;
  return { alert, alertType, message, loading };
};

const actionCreators = {
  getNok: usersActions.getNOK,
  postNok: usersActions.postFeedBack,
  putNok: usersActions.confirmBvnReg,
};

export default connect(mapStateToProps, actionCreators)(NextofKin);
