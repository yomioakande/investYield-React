import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import mail from "../../assets/images/mail1.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
const Pin = (props) => {
  const initialValues = {
    oldPin: "",
    pin: "",
    confirmPin: "",
  };
  const Schema = Yup.object().shape({
    oldPin: Yup.string().required("Enter your Old Pin"),
    pin: Yup.string().required("This field is required"),
    confirmPin: Yup.string().when("pin", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("pin")],
        "Both pin need to be the same"
      ),
    }),
  });

  const success = () => {
    toast.success("Pin successfully changed!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      oldPin: formik.values.oldPin,
      newPin: formik.values.pin,
      platform: {
        source: "string",
        id: "string",
      },
    };

    props.putPassword(obj, "/api/v1/user/pin", success);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnMount: true,
  });

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
            <h5 className="mb-0 text-blue">Enter Old PIN</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="password"
                    className="text-field-profile2"
                    placeholder="PIN"
                    name="oldPin"
                    {...formik.getFieldProps("oldPin")}
                  />
                </div>
                {formik.touched.oldPin && formik.errors.oldPin && (
                  <p className="text-danger font-sm error1 font-weight-bold">
                    {formik.errors.oldPin}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <h5 className="mb-0 text-blue">Enter New PIN</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="password"
                    className="text-field-profile2"
                    placeholder="PIN"
                    name="pin"
                    {...formik.getFieldProps("pin")}
                  />
                </div>
                {formik.touched.pin && formik.errors.pin && (
                  <p className="text-danger font-sm error1 font-weight-bold">
                    {formik.errors.pin}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <h5 className="mb-0 text-blue">Confirm New PIN</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="password"
                    className="text-field-profile2"
                    placeholder="PIN"
                    name="confirmPin"
                    {...formik.getFieldProps("confirmPin")}
                  />
                </div>
                {formik.touched.confirmPin && formik.errors.confirmPin && (
                  <p className="text-danger font-sm error1 font-weight-bold">
                    {formik.errors.confirmPin}
                  </p>
                )}
              </div>
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
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="btn login-submit"
                    value="UPDATE PIN"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <h5 className="mb-0">Can’t remember PIN?</h5>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-blue">
                  Send a mail to
                  <span className="px-2">
                    <img src={mail} alt="Mail" />
                  </span>
                  <a href="mailto:support@investyield.ng">
                    support@investyield.ng
                  </a>
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

export default connect(mapStateToProps, actionCreators)(Pin);
