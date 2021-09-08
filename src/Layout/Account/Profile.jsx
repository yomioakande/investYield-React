import React, { useState, useEffect } from "react";
import uploadImg from "../../assets/images/uploadImg.svg";
import cloudUpload from "../../assets/images/upload-cloud1.svg";
import Style from "./style";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { format, compareAsc } from "date-fns";
const Profile = ({ getData }) => {
  const [profile, setProfile] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const data = await getData("/api/v1/user/profile").then();
      setProfile(data);
      console.log("profile", profile);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  //   console.log(profile,"bobo")
  //   console.log(new Date(profile.dateOfBirth))

  // console.log()
  return (
    <>
      {loading && <Loader />}
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
                  <div
                    className="
                          col-lg-5
                          px-0
                          d-flex
                          justify-content-between
                          cg-3
                        "
                  >
                    <div className="mt-2 flex-grow-1 w-auto">
                      <button className="btn btn-transfer">
                        Transfer Funds
                      </button>
                    </div>
                    <div className="mt-2 flex-grow-1 w-auto">
                      <button className="btn btn-withdraw">
                        Withdraw Funds
                      </button>
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
                      <form action="">
                        <div className="d-flex justify-content-center">
                          <div className="col-lg-6">
                            <div className="d-flex justify-content-center align-items-center">
                              <div>
                                <input
                                  type="file"
                                  className="d-none"
                                  id="fileUpload"
                                />
                                <a href="#" id="openFileUpload">
                                  <img
                                    src={uploadImg}
                                    className="img-fluid"
                                    alt="Upload Image"
                                  />
                                  <span>Tap to edit profile picture</span>
                                </a>
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
                              <textarea
                                className="textAreaProfile"
                                placeholder="Residential Address"
                              ></textarea>
                            </div>
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
                                  />
                                  <a
                                    href="#"
                                    id="openFileUpload"
                                    className="
                                          upload-field-profile
                                          d-flex
                                          justify-content-between
                                          align-items-center
                                        "
                                  >
                                    <h6 className="mb-0">
                                      Upload a means of identification
                                    </h6>
                                    <img
                                      src={cloudUpload}
                                      className="img-fluid"
                                      alt="Upload Image"
                                    />
                                  </a>
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
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4 justify-content-end">
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <button className="btn login-submit">
                                    UPDATE PROFILE
                                  </button>
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
  const username = state.authentication.user;
  // const loading = state.authentication.loading;
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Profile);
