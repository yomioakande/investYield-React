import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
// import { userService } from "../../services/usersService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cloudUpload from "../../assets/images/upload-cloud-grey.svg";
import trashCan from "../../assets/images/trashCan.svg";
const Group2 = (props) => {
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageRef, setImageRef] = useState("");

  //UPLOAD SUCCESSFUL ALERT
  const success = () => {
    toast.success("Uploaded Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  //CHANGE TO BASE64
  const onChanger = (e) => {
    setImageFile(e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      // reader.onload = _handleReaderLoaded;
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

        //eslint-disable-next-line
        const postImageRef = props
          .postImageBase64(baseObj, "/api/v1/util/fileupload", success)
          .then((data) => setImageRef(data));
      };
      reader.readAsDataURL(file);
    }
  };
  const initialValues = {
    decide: "",
    docId: "",
  };

  console.log(imageRef);

  const validationSchema = Yup.object({
    decide: Yup.string().required("Coose an Option"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      decide: values.decide,
      docId: imageRef.reference,
    };

    sessionStorage.setItem("groupInfo2", JSON.stringify(obj));
    window.location.href = "/app/groupsavings3";
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.values);

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Create a private savings group</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How would you want group members to save?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio1"
                                  name="decide"
                                  type="radio"
                                  value={"true"}
                                  onChange={formik.handleChange}
                                />
                                <label for="radio1">
                                  <span>Let me decide</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio2"
                                  name="decide"
                                  value={"false"}
                                  type="radio"
                                  onChange={formik.handleChange}
                                />
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
                            Would you like to upload an image? (optional)
                          </label>
                          <div className="img-upload-div d-flex justify-content-between align-items-center px-3">
                            <h6 className="text-green">{imageName}</h6>
                            {imageFile ? (
                              <button style={{ flexBasis: "10%" }}>
                                <img
                                  src={trashCan}
                                  className="img-fluid"
                                  alt="can"
                                  style={{ cursor: "pointer", width: "50%" }}
                                />
                              </button>
                            ) : (
                              <label
                                htmlFor="fileInput"
                                className="form-label"
                                style={{ flexBasis: "10%" }}
                              >
                                <img
                                  src={cloudUpload}
                                  alt="cloudupload"
                                  style={{ cursor: "pointer", width: "50%" }}
                                />
                              </label>
                            )}

                            <input
                              type="file"
                              className="form-control"
                              name="file"
                              style={{ display: "none" }}
                              id="fileInput"
                              onChange={(e) => onChanger(e)}
                            />
                          </div>

                          {imageFile && (
                            <div className="mt-3">
                              <img
                                className="img-fluid w-100"
                                src={URL.createObjectURL(imageFile)}
                                alt="goalImagePreview"
                              />
                            </div>
                          )}
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
                                {/* <Link
                                  to="/app/groupsavings3"
                                  className="btn login-submit"
                                >
                                  NEXT
                                </Link> */}
                                <button
                                  type="submit"
                                  className="btn login-submit"
                                >
                                  NEXT
                                </button>
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

const mapStateToProps = (state) => {
  // alertType, message
  const { alert } = state;
  const { loading } = state.registration;
  const username = state.authentication.user;
  return { alert, username, loading };
};

const actionCreators = {
  // createCore: usersActions.createCore,
  postImageBase64: usersActions.postImageBase64,
};

export default connect(mapStateToProps, actionCreators)(Group2);
