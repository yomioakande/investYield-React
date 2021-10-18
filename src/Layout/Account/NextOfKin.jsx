import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
const NextofKin = (props) => {
  // eslint-disable-next-line
  const [showError, setShowError] = useState(true);
  const [nokDetails, setNokDetails] = useState(true);
  async function dataInfo() {
    const data = await props.getNok("/api/v1/user/nextofkin").then();
    console.log(data);
    console.log("next of kin");
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

    console.log("reaper", obj);
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
    toast.success("Next of Kin Updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
    dataInfo();
  };

  console.log(formik.values);

  return (
    <>
      {props.loading && <Loader />}

      <ToastContainer autoClose={1000} hideProgressBar />
      {props.message
        ? props.alertType && (
            <div className={`font-sm alert ${props.alertType}`}>
              {props.message}
            </div>
          )
        : null}

      {props.alert.message !== null
        ? props.alert.type && (
            <div className={`font-sm alert mt-3 ${props.alert.type}`}>
              {props.alert.message}
            </div>
          )
        : null}

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
                type="password"
                className="text-field-profile"
                name="password"
                {...formik.getFieldProps("password")}
              />
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
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { alert, loading, alertType, message };
};

const actionCreators = {
  getNok: usersActions.getInfo,
  postNok: usersActions.postFeedBack,
};

export default connect(mapStateToProps, actionCreators)(NextofKin);
