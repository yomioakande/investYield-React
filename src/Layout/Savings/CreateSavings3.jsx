import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { userService } from "../../services/usersService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cloudUpload from "../../assets/images/upload-cloud1.svg";

import trashCan from "../../assets/images/trashCan.svg";
// import homeImg from "../../assets/images/homeImg 2.png";

const CreateSavings3 = (props) => {
  const [targetNum, setTargetNum] = useState("");
  const [base64, setBase64] = useState();
  const [imgName, setImgName] = useState("");
  const [imageRef, setImageRef] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const firstData = JSON.parse(localStorage.getItem("savingsInfo"));

  const savingTarget = firstData.target;
  let targetTime = firstData.endDate;
  const nowDate = new Date();
  let cap = new Date(targetTime);
  let timeDifference = cap.getTime() - nowDate.getTime();
  var days = Math.floor(timeDifference / (1000 * 3600 * 24));

  const initialValues = {
    earnInterest: "",
    frequency: 0,
    amount: targetNum,
  };

  const [state, setState] = useState(initialValues);

  const validationSchema = Yup.object({
    earnInterest: Yup.string().required("A plan Name is Required"),
    frequency: Yup.string().required("A plan Name is Required"),
    amount: Yup.string().required("Pick the Currency to save in"),
  });

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

        const postImageRef = props
          .postImageBase64(baseObj, "/api/v1/util/fileupload", success)
          .then((data) => setImageRef(data));
      };
      reader.readAsDataURL(file);
    }
  };
  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      earnInterest: values.earnInterest,
      frequency: values.frequency,
      amount: values.amount,
      endDate: values.endDate,
      imageRef: imageRef.reference,
      isAutomated: true,
    };
    console.log(obj);
    const mainObj = { ...obj, ...firstData };
    // console.log(mainObj)
    props.createCore(
      mainObj,
      "/api/v1/user/coreaccount",
      "/app/savings/create4"
    );
     // onSubmitProps.resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const [path, setPath] = useState(formik.values.earnInterest);

  const freq = formik.values.frequency;
  useEffect(() => {
    (async function dataInfo() {
      const data = await userService.getEstimate(
        "/api/v1/util/estimate",
        savingTarget,
        freq,
        targetTime,
        "0201"
      );
      setTargetNum(data?.data?.estimate);
    })();
  }, [freq]);

  console.log(formik.values);
  console.log("retro", imageName);
  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Let’s help you save for a new home or rent
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How often would you like to save?
                        </label>
                        <div className="row">
                          <div className="col-lg-6 col-xl-4">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="frequency"
                                  // checked={formik.values.frequency === 1}
                                  value={1}
                                  onChange={formik.handleChange}
                                />
                                <span className="w-100 text-center">Daily</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="frequency"
                                  // checked={formik.values.frequency === 7}
                                  value={7}
                                  onChange={formik.handleChange}
                                />
                                <span className="text-center">Weekly</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xl-4">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="frequency"
                                  // checked={formik.values.frequency === 30}
                                  value={30}
                                  onChange={formik.handleChange}
                                />
                                <span className="w-100 text-center">
                                  Monthly
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="frequency"
                                  // checked={formik.values.frequency === 0}
                                  value={0}
                                  onChange={formik.handleChange}
                                />
                                <span className="text-center">One Time</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {formik.touched.frequency &&
                          formik.errors.frequency && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.frequency}
                            </p>
                          )}
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          Would you like to earn interests?
                        </label>
                        <div className="row">
                          <div className="col-lg-6 col-xl-5">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="earnInterest"
                                  value={true}
                                  // checked={formik.values.earnInterest === true}
                                  onChange={formik.handleChange}
                                />
                                <span className="w-100 text-center">
                                  Yes, I would
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-5">
                            <div className="form-group">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="earnInterest"
                                  value={false}
                                  // checked={formik.values.earnInterest === false}
                                  onChange={formik.handleChange}
                                />
                                <span className="text-center">
                                  No, I don’t want interest
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {formik.touched.earnInterest &&
                          formik.errors.earnInterest && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.earnInterest}
                            </p>
                          )}
                      </div>
                      <div className="form-group mt-4">
                        <h5 className="text-blue weight-500">
                          The amount to save daily to meet the to meet the
                          target amount at the target date is:
                        </h5>
                        <input
                          type="text"
                          className="text-field mt-2"
                          name="amount"
                          value={formik.values.amount + "(N)"}
                          disabled
                        />
                        <div className="d-flex justify-content-end mt-2">
                          <h6 className="text-danger weight-600">
                            {/* Target amount: ₦ 500,000.00 for 303 days. */}
                          </h6>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="text-blue">
                          Would you like to upload an image?
                        </label>
                        <div className="img-upload-div d-flex justify-content-between align-items-center px-3">
                          <h6 className="text-green">{imageName}</h6>
                          {imageFile ? (
                            <a href="#" style={{ flexBasis: "10%" }}>
                              <img
                                src={trashCan}
                                className="img-fluid"
                                alt="can"
                                style={{ cursor: "pointer", width: "50%" }}
                              />
                            </a>
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
                              {/* <i className="icon fa fa-plus" ></i>  */}
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
                            {" "}
                            <img
                              className="img-fluid w-100"
                              src={URL.createObjectURL(imageFile)}
                              alt="goalImagePreview"
                            />{" "}
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
                              <input
                                type="submit"
                                value="NEXT"
                                disabled={
                                  !formik.isValid || formik.isSubmitting
                                }
                                className="btn login-submit"
                              />
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
  const { alert } = state;
  const username = state.authentication.user;
  return { alert, username };
};

const actionCreators = {
  createCore: usersActions.createCore,
  postImageBase64: usersActions.postImageBase64,
};

export default connect(mapStateToProps, actionCreators)(CreateSavings3);
