import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import Loader from "../../../common/Loader";

import withdraw from "../../../assets/images/withdrawFundIcon.svg";
const Index = (props) => {
  const [bankDetails, setBankDetails] = useState({});
  const [loading, setloading] = useState(false);
  const [purseAccounts, setPurseAccounts] = useState([]);
  const [num, setNum] = useState("");
  const dataInfo = async () => {
    setloading(true);
    const account = await props.getAccount("/api/v1/user/bankaccount").then();
    const myPurseAccounts = await props
      .getAccounts("/api/v1/user/accountbyproduct", "0106")
      .then();
    console.log(purseAccounts, "jkk");
    setPurseAccounts(myPurseAccounts);
    setBankDetails({ ...account });
    setloading(false);
  };
  useEffect(() => {
    dataInfo();
    //eslint-disable-next-line
  }, []);

  const initialValues = {
    pin: "",
    amount: "",
    reason: "",
    remark: "",
    accountId: "",
  };

  const validationSchema = Yup.object({
    pin: Yup.string()
      .min(2, "Pin is too short!")
      .max(50, "Pin is too Long!")
      .required("Pin is Required"),
    amount: Yup.string().required("Amount is Required"),
    reason: Yup.string()
      .required("Invalid email")
      .required("Email is Required"),
    remark: Yup.string(),
    accountId: Yup.string().required("Select Account"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      pin: values.pin,
      amount: values.amount,
      reason: values.reason,
      remark: values.remark,
      accountId: values.accountId,
    };

    console.log("submitted", obj);

    props.withdrawal(obj, "/api/v1/transfer/savingswithdraw", "/app/stash/otp");
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    formik.setFieldValue("amount", num?.value);
    //eslint-disable-next-line
  }, [num?.value]);

  const purposeWithdrawal = [
    { value: "purpose", label: " Purpose for withdrawal" },
    { value: "food", label: "Food" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "children", label: "Children" },
    { value: "vacation", label: "Vacation" },
    { value: "rent", label: "Rent" },
    { value: "pay bills", label: "Pay Bills" },
    { value: "party", label: "Party" },
    { value: "emergency fund", label: "Emergency Fund" },
    { value: "transportation", label: "Transportation" },
    { value: "health care", label: "Health Care" },
    { value: "Retirement", label: "Retirement" },
    { value: "education", label: "Education" },
  ];

  const options1 = purposeWithdrawal.map((single, index) => {
    return {
      value: single?.value,
      label: single?.label,
    };
  });

  const options2 = purseAccounts.map((single, index) => {
    return {
      value: single?.id,
      label: single?.name,
    };
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px solid #cecece",
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
      height: "10rem",
      overflowY: "scroll",
    }),

    control: (base, state) => ({
      ...base,
      // border: state.isFocused ? 0 : 0,
      border: "1px solid #cecece",
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: "1px solid #cecece",
      },
    }),
  };
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  console.log(formik.values);
  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="au-card">
                <div className="au-card-inner">
                  <Link
                    to="/app/account/mycard"
                    className="d-flex align-items-center"
                  >
                    <img
                      src={withdraw}
                      className="img-fluid"
                      alt="Funds Withdrawal"
                    />
                    <div className="px-2">
                      {Object.keys(bankDetails).length > 0 ? (
                        <p className="text-blue weight-600">
                          {`Your funds will be withdrawn into your
                          ${bankDetails?.bName}
                          account (${bankDetails?.number}). Tap to change
                          `}
                        </p>
                      ) : (
                        <p>
                          Tap this tab to add your Account details for Withdrawl
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card position-relative min-height-400 px-0">
                <div className="au-card-inner ">
                  <div className="px-5">
                    <h3 className="title-2 tm-b-5">
                      Enter details for Withdrawal
                    </h3>
                  </div>
                  <div className="px-5 mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          How much would you like to withdraw today?
                        </label>

                        <NumberFormat
                          isNumericString={true}
                          thousandSeparator={true}
                          className="text-field"
                          placeholder="Amount"
                          name="amount"
                          value={formik.values.amount}
                          onValueChange={(values) => {
                            setNum({ value: values.value });
                          }}
                          onChange={formik.handleChange}
                        />
                        {/* <input
                          type="number"
                          className="text-field"
                          placeholder="Amount (N)"
                          name={"amount"}
                          {...formik.getFieldProps("amount")}
                        /> */}
                      </div>
                      {formik.touched.amount && formik.errors.amount && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.amount}
                        </p>
                      )}
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          What is the pupose for withdrawal? (optional)
                        </label>
                        <Select
                          maxMenuHeight={5}
                          options={options1}
                          styles={customStyles}
                          isSearchable={false}
                          className="select-field"
                          placeholder={""}
                          value={defaultValue(options1, formik.values.reason)}
                          onChange={(value) =>
                            formik.setFieldValue("reason", value.value)
                          }
                          autoFocus={true}
                        />
                        {/* <select className="text-field">
                          <option value="purpose" selected="selected" disabled>
                            Purpose for withdrawal
                          </option>
                          <option value="food">Food</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="shopping">Shopping</option>
                          <option value="children">Children</option>
                          <option value="vacation">Vacation</option>
                          <option value="rent">Rent</option>
                          <option value="pay bills">Pay Bills/Fees</option>
                          <option value="party">Party</option>
                          <option value="emergency fund">Emergency Fund</option>
                          <option value="transportation">Transportation</option>
                          <option value="health care">Health Care</option>
                          <option value="retirement">Retirement</option>
                          <option value="education">Education</option>
                        </select> */}
                      </div>
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          Where would you like to withdraw from?
                        </label>
                        <Select
                          maxMenuHeight={5}
                          options={options2}
                          styles={customStyles}
                          isSearchable={false}
                          className="select-field"
                          placeholder={""}
                          value={defaultValue(
                            options2,
                            formik.values.accountId
                          )}
                          onChange={(value) =>
                            formik.setFieldValue("accountId", value.value)
                          }
                          autoFocus={true}
                        />
                        {/* <select className="text-field">
                          <option value="purpose" selected="selected" disabled>
                            Withdraw from
                          </option>
                          <option value="vibe">Vibe cash</option>
                        </select> */}
                      </div>
                      <div className="form-group">
                        <label
                          for="pin"
                          className="text-blue font-sm weight-500"
                        >
                          Enter your Pin
                        </label>
                        <input
                          type="password"
                          className="text-field"
                          placeholder="Enter Pin here"
                          name="pin"
                          {...formik.getFieldProps("pin")}
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          Addtional note for investYield (optional)
                        </label>
                        <input
                          type="text"
                          className="text-field"
                          placeholder="Additional note"
                          name="remark"
                          {...formik.getFieldProps("remark")}
                        />
                      </div>

                      <div className="form-group mt-5">
                        <input
                          type="submit"
                          className="btn login-submit"
                          value="NEXT"
                        />
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
  const { loading, alertType, message } = state.registration;
  return { alert, username, message, alertType, loading };
};

const actionCreators = {
  withdrawal: usersActions.createCore,
  getAccount: usersActions.getInfo,
  getAccounts: usersActions.getAccounts,
};

export default connect(mapStateToProps, actionCreators)(Index);
