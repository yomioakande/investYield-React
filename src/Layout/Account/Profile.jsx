import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import uploadImg from "../../assets/images/uploadImg.svg";
import cloudUpload from "../../assets/images/upload-cloud1.svg";
import Style from "./style";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { format } from "date-fns";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({
  postImageBase64,
  loading,
  alertType,
  message,
  post,
  getData,
}) => {
  const [profile, setProfile] = useState({});
  const [loading1, setloading1] = useState(false);
  const [showError, setShowError] = useState(true);
  // eslint-disable-next-line
  const [imageRef, setImageRef] = useState("");
  // eslint-disable-next-line
  const [imageName, setImageName] = useState("");
  // eslint-disable-next-line
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    (async function dataInfo() {
      setloading1(true);
      const data = await getData("/api/v1/user/profile").then();
      setProfile(data);
      setloading1(false);
    })();
    // eslint-disable-next-line
  }, []);

  const initialValues = {
    address: profile.address,
    password: "",
  };
  const Schema = Yup.object({
    address: Yup.string().required("Enter your Address"),
    password: Yup.string().required("Enter your Password"),
  });

  const success = () => {
    toast.success("Address Updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
    // setloading(false);
  };

  const onSubmit = (values, onSubmitProps) => {
    setShowError(true);
    // setloading(true);
    const obj = {
      address: values.address,
      password: values.password,
    };
    console.log("reaper", obj);
    // console.log(props.putPassword)
    post(obj, "/api/v1/user/profile", success);
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
  //

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  //CHANGE TO BASE64

  const success2 = () => {
    toast.success("Upload Successful!", {
      position: toast.POSITION.TOP_CENTER,
    });
    // setloading(false);
  };
  const onChanger = (e) => {
    setImageFile(e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }

    const reader = new FileReader();
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setImageName(file.name);
        //file.name,file.size,reader.result
        const baseObj = {
          name: file.name,
          content: reader.result,
        };
        console.log(baseObj);
        //eslint-disable-next-line
        const postImageRef = postImageBase64(
          baseObj,
          "/api/v1/util/fileupload",
          success2
        ).then((data) => setImageRef(data));
      };
      reader.readAsDataURL(file);
    }
  };
  const _handleReaderLoaded = (readerEvt) => {
    //eslint-disable-next-line
    let binaryString = readerEvt.target.result;
    // setBase64(btoa(binaryString));
  };

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />

      {(loading1 || loading) && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">My Portfolio</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">
                      My Portfolio / Profile Settings
                    </p>
                  </div>
                  <div className="col-lg-5 px-0 d-flex justify-content-between cg-3">
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link to="/app/account/transfer" className="btn btn-transfer">
                        Transfer Funds
                      </Link>
                    </div>
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link to="/app/account/withdraw" className="btn btn-withdraw">
                        Withdraw Funds
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card h-100">
                <div className="au-card-inner">
                  <Style>
                    <ul
                      className="nav nav-pills mb-5"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="#pills-debitCard-tab"
                          data-toggle="pill"
                          href="#pills-debitCard"
                          role="tab"
                          aria-controls="#pills-debitCard"
                          aria-selected="true"
                        >
                          My Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-pills-withdrawalAccount-tab"
                          data-toggle="pill"
                          href="#pills-withdrawalAccount"
                          role="tab"
                          aria-controls="pills-withdrawalAccount"
                          aria-selected="false"
                        >
                          Next of Kin
                        </a>
                      </li>
                    </ul>
                  </Style>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <div className="d-flex justify-content-center">
                          <div className="col-lg-6">
                            <div className="d-flex justify-content-center align-items-center">
                              <div>
                                {/* <button type="button" id="openFileUpload"> */}
                                <input
                                  type="file"
                                  className="d-none"
                                  id="fileUpload"
                                  onChange={(e) => onChanger(e)}
                                />
                                <label
                                  htmlFor="fileUpload"
                                  className="form-label"
                                  style={{ flexBasis: "10%" }}
                                >
                                  <img
                                    src={uploadImg}
                                    className="img-fluid"
                                    alt="Upload"
                                    id="fileUpload"
                                  />
                                  Tap to edit profile picture
                                </label>
                                {/* <span>Tap to edit profile picture</span> */}
                                {/* </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">Your Full Name</h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    className="text-field-profile"
                                    value={profile.firstName}
                                    disabled
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
                                    value={profile.lastName}
                                    disabled
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
                                    type="text"
                                    className="text-field-profile"
                                    value={profile.email}
                                    disabled
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
                                    value={profile.phoneNumber}
                                    disabled
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
                            <h5 className="mb-0 text-blue">
                              Date of birth and Residential details
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    className="text-field-profile"
                                    value={format(
                                      new Date(
                                        profile.dateOfBirth
                                          ? profile.dateOfBirth
                                          : null
                                      ),
                                      "MM/dd/yyyy"
                                    )}
                                    disabled
                                  />
                                  <label
                                    for="firstName"
                                    className="font-sm position-absolute"
                                    style={{ left: "15px", top: "15%" }}
                                  >
                                    Date of birth (dd / mm / yyyy)
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <div className="custom-select text-field-profile  p-0">
                                    <select className="text-field px-0">
                                      <option value="0">
                                        State of residence
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              {showError
                                ? message !== null
                                  ? alertType && (
                                      <div
                                        className={`font-sm alert ${alertType}`}
                                      >
                                        {message}
                                      </div>
                                    )
                                  : null
                                : null}
                              <textarea
                                className="textAreaProfile"
                                placeholder="Residential Address"
                                // defaultValue={profile.firstName}
                                // onLoad={() => {
                                //   formik.setFieldValue('address', profile.address)
                                //  }}
                                // value={profile.address}
                                name="address"
                                {...formik.getFieldProps("address")}
                              ></textarea>
                            </div>
                            {formik.touched.address &&
                              formik.errors.address && (
                                <p className="text-danger font-sm error1 font-weight-bold">
                                  {formik.errors.address}
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">
                              Upload a valid means of identification
                              (international passport, voters card, drivers
                              license, NIN).
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group position-relative">
                                  <input
                                    type="file"
                                    className="d-none"
                                    id="fileUpload"
                                    onChange={(e) => onChanger(e)}
                                  />
                                  <label
                                    htmlFor="fileUpload"
                                    // type="button"
                                    // // href="#"
                                    // id="openFileUpload"
                                    style={{ flexBasis: "10%" }}
                                    className="upload-field-profile d-flex justify-content-between align-items-center"
                                  >
                                    <h6 className="mb-0">
                                      Upload a means of identification
                                    </h6>
                                    <img
                                      src={cloudUpload}
                                      className="img-fluid"
                                      alt="Upload"
                                      id="fileUpload"
                                      style={{ cursor: "pointer", width: "5%" }}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">
                              Please enter your password for security purpose
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="password"
                                    className="text-field-profile2"
                                    placeholder="Password"
                                    name="password"
                                    {...formik.getFieldProps("password")}
                                  />
                                </div>
                                {formik.touched.password &&
                                  formik.errors.password && (
                                    <p className="text-danger font-sm error1 font-weight-bold">
                                      {formik.errors.password}
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
                                    disabled={
                                      !formik.isValid || formik.isSubmitting
                                    }
                                    className="btn login-submit"
                                    value="UPDATE PROFILE"
                                  />
                                  {/* <button className="btn login-submit">
                                    UPDATE PROFILE
                                  </button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
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
  const { loading, alertType, message } = state.registration;
  // const loading = state.authentication.loading;
  return { alert, alertType, message, loading };
};

const actionCreators = {
  getData: usersActions.getInfo,
  post: usersActions.confirmBvnReg,
  postImageBase64: usersActions.postImageBase64,
};

export default connect(mapStateToProps, actionCreators)(Profile);
