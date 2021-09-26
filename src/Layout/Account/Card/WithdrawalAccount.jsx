import React, { useState, useEffect } from "react";
import WithdrawalCard from "./WithdrawalCard";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Loader from "../../../common/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WithdrawalAccount = (props) => {
  // props.resetAlerts()
  const [bankOptions, setBankOptions] = useState([]);
  const [bankDetails, setBankDetails] = useState([]);
  const [update, setUpdate] = useState(false);

  const updateToggle = () => {
    setUpdate(!update);
  };
  const dataInfo = async () => {
    const datas = await props.getBanks("/api/v1/util/bank").then();
    const account = await props.getAccount("/api/v1/user/bankaccount").then();
    setBankDetails(account);
    setBankOptions(datas);
  };
  useEffect(() => {
    dataInfo();
    //eslint-disable-next-line
  }, []);

  const delete1 = () => {
    toast.success("Account successfully deleted", {
      position: toast.POSITION.TOP_CENTER,
    });
    dataInfo();
  };

  const deleteId = (id) => {
    const obj = {
      id,
    };

    props.deleteId("/api/v1/user/bankaccount", obj, delete1);
  };

  const options = bankOptions.map((single, index) => {
    return {
      value: single.code,
      label: single.name,
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
    }),

    menuList: (provided, state) => ({
      paddingTop: 0,
      paddingBottom: 0,
      background: "#fff",
      hover: "#DDE9FB",
      height: "15rem",
      overflowY: "scroll",
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

  const [showError, setShowError] = useState(true);

  const initialValues = {
    accountNumber: "",
    bankCode: "",
    pin: "",
  };

  const validationSchema = Yup.object({
    accountNumber: Yup.string()
      .min(10, "Account Number is too short!")
      .max(15, "Account Number is too Long!")
      .required("Account Number is Required"),
    bankCode: Yup.string().required("A Bank name is Required"),
    pin: Yup.string()
      .min(4, "Pin must be 4 digits")
      .max(4, "Pin must be 4 digits")
      .required("Pin is Required"),
  });

  const success = () => {
    toast.success("Account successfully added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    setShowError(true);
    const obj = {
      accountNumber: values.accountNumber,
      bankCode: values.bankCode,
      pin: values.pin,
    };
    props.postAccount(obj, "/api/v1/user/bankaccount", success);
    onSubmitProps.resetForm();
    show();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  return (
    <>
      {props.loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 mt-4">
          {
            bankDetails ? (
              <WithdrawalCard bankDetails={bankDetails} />
            ) : (
              // showError ? (
              props.alert.type && (
                <div className={`font-sm alert mt-3 ${props.alert.type}`}>
                  {props.alert.message}
                </div>
              )
            )
            // ) : null
          }

          <div className="row">
            <div className="col-lg-6">
              <div className="mt-3">
                <button
                  type="button"
                  onClick={updateToggle}
                  className="btn login-submit"
                >
                  {bankDetails ? " Update Account" : "Add Account"}
                </button>
              </div>
            </div>

            {bankDetails ? (
              <div className="col-lg-6">
                <div className="mt-3">
                  <button
                    onClick={() => deleteId(bankDetails.id)}
                    className="btn btn-delete-card text-danger"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {update && (
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7">
            <div>
              <h6 className="text-dark">
                Please enter an account number linked with the BVN provided for
                this investYield account.
              </h6>
              {showError && props.message
                ? props.alertType && (
                    <div className={`font-sm alert ${props.alertType}`}>
                      {props.message}
                    </div>
                  )
                : null}
              <form onSubmit={formik.handleSubmit} className="mt-4">
                <div className="form-group">
                  <div className="custom-select text-field-profile p-0">
                    <Select
                      maxMenuHeight={5}
                      options={options}
                      styles={customStyles}
                      isSearchable={false}
                      className="select-field"
                      placeholder={""}
                      value={defaultValue(options, formik.values.bankCode)}
                      onChange={(value) =>
                        formik.setFieldValue("bankCode", value.value)
                      }
                      autoFocus={true}
                    />
                  </div>
                </div>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="text-field"
                    placeholder="Enter Account Number"
                    name="accountNumber"
                    {...formik.getFieldProps("accountNumber")}
                  />
                </div>

                <div className="form-group mt-4">
                  <input
                    type="password"
                    className="text-field"
                    name="pin"
                    maxLength={4}
                    {...formik.getFieldProps("pin")}
                    placeholder="Enter Pin"
                  />
                </div>
                <div className="form-group mt-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mt-3">
                        <button className=" btn btn-delete-card text-danger ">
                          CANCEL
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mt-3">
                        <input
                          type="submit"
                          className="btn login-submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          value="ADD ACCOUNT"
                        />
                      </div>
                      <ToastContainer autoClose={1000} hideProgressBar />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading, alertType, message } = state.registration;
  return { alert, username, message, alertType, loading };
};

const actionCreators = {
  getBanks: usersActions.getInfo,
  getAccount: usersActions.getInfo,
  postAccount: usersActions.postFeedBack,
  deleteId: usersActions.deleteData,
  resetAlerts: usersActions.resetAlerts,
};

export default connect(mapStateToProps, actionCreators)(WithdrawalAccount);
