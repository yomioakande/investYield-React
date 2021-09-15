import React, { useState, useEffect } from "react";
import WithdrawalCard from "./WithdrawalCard";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
const WithdrawalAccount = (props) => {
  const [bankOptions, setBankOptions] = useState([]);

  useEffect(() => {
    (async function dataInfo() {
      const datas = await props.getBanks("/api/v1/util/bank").then();

      console.log(datas);

      //   const { interest } = datas;
      setBankOptions(datas);
    })();
    //eslint-disable-next-line
  }, []);

  console.log(bankOptions);

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
      // zIndex: 9999,
    }),

    menuList: (provided, state) => ({
      paddingTop: 0,
      paddingBottom: 0,
      background: "#fff",
      hover: "#DDE9FB",
      // zIndex: 9999,
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
      .min(2, "Account Number: is too short!")
      .max(50, "Account Number:is too Long!")
      .required("Account Number: is Required"),
    lastName: Yup.string()
      .min(2, "LastName is too Short!")
      .max(50, "Last Name is too Long!")
      .required("LastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // setloading(true);
    setShowError(true);
    const obj = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      phoneNumber: formik.values.phoneNumber,
      dob: formik.values.dob,
      platform: {
        source: "string",
        id: "string",
      },
      referral: formik.values.referral,
    };
    sessionStorage.setItem("number", JSON.stringify(obj.phoneNumber));
    props.register(obj, "/api/v1/identity/register", "/auth/signup2");

    // onSubmitProps.resetForm();
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
    }, 3000);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 mt-4">
          {/* //cvb */}
          <WithdrawalCard />
          <div className="row">
            <div className="col-lg-6">
              <div className="mt-3">
                <button className="btn login-submit">Update Account</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3">
                <button className="btn btn-delete-card text-danger">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <div>
            <h6 className="text-dark">
              Please enter an account number linked with the BVN provided for
              this investYield account.
            </h6>
            <form className="mt-4">
              <div className="form-group">
                <div className="custom-select text-field-profile p-0">
                  {/* <select className="text-field px-0">
                    <option value="0" selected>
                      Select Bank
                    </option>
                    <option value="1">Access Bank</option>
 
                  </select> */}
                  <Select
                    maxMenuHeight={5}
                    options={options}
                    styles={customStyles}
                    isSearchable={false}
                    className="select-field"
                    placeholder={""}
                    value={defaultValue(options, formik.values.frequency)}
                    onChange={(value) =>
                      formik.setFieldValue("frequency", value.value)
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
                />
              </div>

              <div className="form-group mt-4">
                <input
                  type="text"
                  className="text-field"
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
                      <button className="btn login-submit">ADD ACCOUNT</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
  getBanks: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(WithdrawalAccount);
