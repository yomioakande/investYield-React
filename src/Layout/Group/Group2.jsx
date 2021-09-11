import React from "react";
import { Link } from "react-router-dom";
import cloudUpload from "../../assets/images/upload-cloud-grey.svg";
const Group2 = () => {
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Create a private savings group</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How would you want group members to save?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input id="radio1" name="radio" type="radio" />
                                <label for="radio1">
                                  <span>Let me decide</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input id="radio2" name="radio" type="radio" />
                                <label for="radio2">
                                  <span>Let group members decide</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue">
                            Would you like to upload an image?
                          </label>
                          <input
                            type="file"
                            className="d-none"
                            id="upload-field"
                          />
                          <button
                            className="btn text-field d-flex justify-content-between align-items-center text-grey"
                            id="upload-btn"
                          >
                            <h5>Choose image</h5>
                            <img
                              src={cloudUpload}
                              className="img-fluid"
                              alt=""
                            />
                          </button>
                        </div>
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button className="btn btn-previous text-green">
                                  PREVIOUS
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <Link
                                  to="/app/groupsavings3"
                                  className="btn login-submit"
                                >
                                  NEXT
                                </Link>
                                {/* <button className="btn login-submit">
                                  NEXT
                                </button> */}
                              </div>
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

export default Group2;
