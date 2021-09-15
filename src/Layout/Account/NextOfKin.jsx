import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import mail from "../../assets/images/mail1.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
const NextofKin = (props) => {
  const formik = useFormik({});

  console.log(formik.values);

  return (
    <>
      {props.loading && <Loader />}

      <ToastContainer autoClose={1000} hideProgressBar />
      {props.message !== null
        ? props.alertType && (
            <div className={`font-sm alert ${props.alertType}`}>
              {props.message}
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
                  <input type="text" className="text-field-profile" value="" />
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
                  <input type="text" className="text-field-profile" value="" />
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
                  <input type="text" className="text-field-profile" value="" />
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
                  <input type="text" className="text-field-profile" value="" />
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
              <input type="text" className="text-field-profile" value="" />
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
              ></textarea>
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
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  putPassword: usersActions.confirmBvnReg,
};

export default connect(mapStateToProps, actionCreators)(NextofKin);
