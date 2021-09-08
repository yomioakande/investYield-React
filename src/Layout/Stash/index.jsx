import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
const Index = ({ getFrequency, createStash, loading }) => {
  const [frequency, setFrequency] = useState("");
  const [freqOptions, setFreqOptions] = useState([]);

  const initialValues = {
    amount: "",
    frequency: "",
    ccyCode: "1",
  };

  const validationSchema = Yup.object({
    amount: Yup.number().required("An Amount is Required"),
    frequency: Yup.string().required("Choose a frequency"),
    ccyCode: Yup.string().required("Pick the Currency to save in"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      amount: values.amount,
      frequency: values.frequency,
      ccyCode: values.ccyCode,
    };

    const obj2 = freqOptions.find(
      (option) => option.tenor.code === formik.values.frequency
    );

    createStash(obj, obj2, "/api/v1/user/stash", "/app/stash/breakdown");
    // onSubmitProps.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  console.log(formik.values);

  const ccy = formik.values.ccyCode;
  useEffect(() => {
    (async function dataInfo() {
      const datas = await getFrequency(
        "/api/v1/util/productinterest",
        "0103",
        ccy
      ).then();

      const { code, interest } = datas;
      setFreqOptions(interest);
    })();
  }, [ccy]);

  const options = freqOptions.map((single, index) => {
    return {
      value: single.tenor.code,
      label: `${single.tenor.name} at ${single.rate}% per annum`,
    };
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px solid #DDE9FB",
      color: state.selectProps.menuColor,
      paddingTop: 14,
      paddingBottom: 14,
      hover: "#DDE9FB",
      zIndex: 9999,
    }),

    menuList: (provided, state) => ({
      paddingTop: 0,
      paddingBottom: 0,
      background: "#fff",
      hover: "#DDE9FB",
    }),

    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Stash</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            What currency would you like to save in?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio1"
                                    name="ccyCode"
                                    type="radio"
                                    // checked={formik.values.ccyCode === 2}
                                    value={"2"}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio1">
                                    <span>$ US Dollars</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio2"
                                    name="ccyCode"
                                    type="radio"
                                    // checked={formik.values.ccyCode === 1}
                                    value={"1"}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio2">
                                    <span>₦ Naira</span>
                                  </label>
                                  {formik.touched.ccyCode &&
                                    formik.errors.ccyCode && (
                                      <p className="text-danger font-sm error1 font-weight-bold">
                                        {formik.errors.ccyCode}
                                      </p>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group mt-4">
                          <label for="Amount" className="text-blue weight-500">
                            How much will you like to stash daily?
                          </label>
                          <input
                            type="number"
                            className="text-field"
                            placeholder="Amount"
                            name="amount"
                            onChange={formik.handleChange}
                          />
                          {formik.touched.amount && formik.errors.amount && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.amount}
                            </p>
                          )}
                        </div>

                        <div className="form-group mt-4">
                          <label for="Amount" className="text-blue weight-500">
                            How long do you want to fix the money for?
                          </label>
                          <div className="custom-select text-field p-0">
                            <Select
                              options={options}
                              styles={customStyles}
                              isSearchable={false}
                              className="select-field"
                              placeholder={""}
                              // name="frequency"
                              value={defaultValue(
                                options,
                                formik.values.frequency
                              )}
                              onChange={(value) =>
                                formik.setFieldValue("frequency", value.value)
                              }
                              autoFocus={true}
                            />
                          </div>
                          {formik.touched.frequency &&
                            formik.errors.frequency && (
                              <p className="text-danger font-sm error1 font-weight-bold">
                                {formik.errors.frequency}
                              </p>
                            )}
                        </div>
                        <div className="row mt-5 align-items-center justify-content-end">
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
                                  value={"NEXT"}
                                  disabled={!formik.isValid || formik.isSubmitting}
                                  className="btn login-submit"
                                />
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

// export default

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  // bvnReg: usersActions.bvnReg,
  getFrequency: usersActions.getFrequency,
  createStash: usersActions.createStash,
};

export default connect(mapStateToProps, actionCreators)(Index);
