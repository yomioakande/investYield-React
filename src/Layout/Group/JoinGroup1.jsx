import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { userService } from "../../services/usersService";
const JoinGroup1 = (props) => {
  let data = props.location.state.data;
  data = data.startDate.toString();
  // eslint-disable-next-line
  const [num, setNum] = useState("");
  const [targetNum, setTargetNum] = useState("");
  const [loading, setloading] = useState(false);

  const initialValues = {
    freq: "",
    earn: "",
    start: "",
  };
  const disablePastDate = () => {
    const today = new Date(data);
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const validationSchema = Yup.object({
    freq: Yup.string().required("A plan Name is Required"),
    earn: Yup.string().required("A plan Name is Required"),
    start: Yup.string().required("A plan Name is Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setloading(true);
    const obj = {
      freq: values.freq,
      earn: values?.earn,
      start: values.start,
      cntr_amt: targetNum,
      id: data?.id,
      name: data?.name,
      ccy: data?.currency?.code,
      target: data?.target,
      tgtDate: data?.endDate,
      decide: data?.ownerDecide,
      docId: null,
      isPublic: true,
    };

    props.createGroup(
      obj,
      "/api/v1/user/join_group_savings",
      "/app/groupsavings/joingroup2"
    );
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    // setloading(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    formik.setFieldValue("cntr_amt", num?.value);
    // eslint-disable-next-line
  }, [num?.value]);

  const dataInfo = async (freq) => {
    const datas = await userService.getEstimate(
      "/api/v1/util/estimate",
      data?.target,
      freq,
      data?.endDate,
      formik.values.start,
      "0201"
    );

    setTargetNum(datas?.data?.estimate);
  };

  const onChangers = (e) => {
    const { value } = e.target;
    dataInfo(value);
  };

  const currencyVal = (number) =>
    new Intl.NumberFormat(data?.currency?.code === 1 ? "en-NG" : "en-US", {
      style: "currency",
      currency: data?.currency?.code === 1 ? "NGN" : "USD",
    }).format(number);

  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Please choose how you want to save
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        <label className="text-blue">Choose a start date</label>
                        <input
                          type="date"
                          min={disablePastDate()}
                          name={"start"}
                          {...formik.getFieldProps("start")}
                          className="text-field mt-2"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          Would you like members to earn interest?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-yes"
                                  name="earn"
                                  type="radio"
                                  value={false}
                                  onChange={formik.handleChange}
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
                                  name="earn"
                                  type="radio"
                                  value={false}
                                  onChange={formik.handleChange}
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
                          The amount for members to save daily to meet the
                          target amount at the target date is:
                        </label>
                        <div className="form-group position-relative">
                          {/* <input
                            type="text"
                            className="text-field-profile"
                            value="₦ 5,000.00"
                            readonly
                          /> */}
                          <NumberFormat
                            isNumericString={true}
                            thousandSeparator={true}
                            className="text-field-profile"
                            name="cntr_amt"
                            value={currencyVal(targetNum)}
                            readonly
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
                              {/* <Link
                                to="/app/groupsavings/joingroup2"
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

export default connect(mapStateToProps, actionCreators)(JoinGroup1);

// export default JoinGroup1;
