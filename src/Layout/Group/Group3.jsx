import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Loader from "../../common/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { userService } from "../../services/usersService";
const Group3 = (props) => {
  // eslint-disable-next-line
  const [num, setNum] = useState("");
  const [targetNum, setTargetNum] = useState("");
  const initialValues = {
    start: "",
    freq: "",
    earn: "",
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const validationSchema = Yup.object({
    start: Yup.string().required("Enter a Start Date"),
    freq: Yup.string().required("Select a Frequency"),
    // cntr_amt: Yup.string().required("A target amount is required"),
    earn: Yup.boolean().required("Enter an Amount"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      start: values.start,
      freq: values.freq,
      cntr_amt: targetNum,
      earn: values.earn,
    };

    const groupInfo1 = JSON.parse(sessionStorage.getItem("groupInfo"));
    const groupInfo2 = JSON.parse(sessionStorage.getItem("groupInfo2"));
    let mainGroupInfo = { ...groupInfo1, ...groupInfo2, ...obj };

    props.createGroup(
      mainGroupInfo,
      "/api/v1/user/group_savings",
      "/app/groupsavings4"
    );
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    formik.setFieldValue("cntr_amt", num?.value);
    // eslint-disable-next-line
  }, [num?.value]);

  const groupData = JSON.parse(sessionStorage.getItem("groupInfo"));
  const currencyVal = (number) =>
    new Intl.NumberFormat(groupData.ccy === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: groupData.ccy === "1" ? "NGN" : "USD",
    }).format(number);

  const dataInfo = async (freq) => {
    const data = await userService.getEstimate(
      "/api/v1/util/estimate",
      groupData.target,
      freq,
      groupData.tgtDate,
      formik.values.start,
      "0201"
    );
    setTargetNum(data?.data?.estimate);
  };

  const onChangers = (e) => {
    const { value } = e.target;
    dataInfo(value);
  };

  return (
    <>
      {props.loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Decide how you want the group to save
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        <label className="text-blue">Choose a start date</label>
                        <input
                          type="date"
                          min={disablePastDate()}
                          name="start"
                          {...formik.getFieldProps("start")}
                          className="text-field mt-2"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How often would you like to save?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio1"
                                  type="radio"
                                  name="freq"
                                  value={1}
                                  onClick={onChangers}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio1">
                                  <span>Daily</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio2"
                                  type="radio"
                                  name="freq"
                                  value={7}
                                  onClick={onChangers}
                                  onChange={formik.handleChange}
                                  // onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio2">
                                  <span>Weekly</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio3"
                                  type="radio"
                                  name="freq"
                                  value={30}
                                  onClick={onChangers}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio3">
                                  <span>Monthly</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio4"
                                  type="radio"
                                  name="freq"
                                  value={0}
                                  onClick={onChangers}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("freq")}
                                />
                                <label for="radio4">
                                  <span>One Time</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          Would you like to earn interest?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-yes"
                                  name="earn"
                                  value={true}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("earn")}
                                  type="radio"
                                />
                                <label for="radio-earn-yes">
                                  <span>Yes, I would</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-no"
                                  type="radio"
                                  name="earn"
                                  value={false}
                                  onChange={formik.handleChange}
                                  // {...formik.getFieldProps("earn")}
                                />
                                <label for="radio-earn-no">
                                  <span>No, I don’t want interest</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label className="text-blue">
                          The amount for you to save daily to meet the target
                          amount at the target date is:
                        </label>
                        <div className="form-group position-relative">
                          <NumberFormat
                            isNumericString={true}
                            thousandSeparator={true}
                            className="text-field-profile"
                            name="cntr_amt"
                            // value="cntr_amt"
                            value={currencyVal(targetNum)}
                            disabled
                          />
                          <label
                            for="firstName"
                            className="font-sm position-absolute"
                            style={{ left: "15px", top: "15%" }}
                          >
                            Amount
                          </label>
                        </div>
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
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  createGroup: usersActions.createStash,
};

export default connect(mapStateToProps, actionCreators)(Group3);
