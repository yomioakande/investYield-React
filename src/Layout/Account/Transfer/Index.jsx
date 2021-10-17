import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import SelectModal from "./SelectModal";
import { useFormik } from "formik";
import NumberFormat from "react-number-format";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import Loader from "../../../common/Loader";
import Congrats from "../../Congrats";
const Index = (props) => {
  const [modalInOpen, setModalInOpen] = useState(false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const [beneficiary, setBeneficiary] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [single, setSingle] = useState("");
  const [num, setNum] = useState("");
  const modalToggle = () => {
    setModalInOpen(true);
  };

  const selectModalToggle = () => {
    setSingle("");
    setSelectModalOpen(!selectModalOpen);
  };

  const close = () => {
    setModalInOpen(false);
  };

  const close1 = () => {
    setSelectModalOpen(false);
  };

  const initialValues = {
    email: "",
    amount: "",
    save: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("This field is required"),
    amount: Yup.string().required("This field is required"),
    save: Yup.string().required("This field is required"),
  });

  const setModal = () => {
    setSuccessModal(true);
    // alert("success")
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      beneficiaryId: values.email,
      amount: values.amount,
      saveBeneficiary: values.save,
    };
    props.transfer(obj, "/api/v1transfer/TransferToBeneficiary", setModal);
    // onSubmitProps.resetForm();
    // show();
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
    // eslint-disable-next-line
  }, [num?.value]);

  const dataInfo = async () => {
    const data = await props.getData("/api/v1/user/beneficiary").then();
    setBeneficiary(data);
  };

  useEffect(() => {
    formik.setFieldValue("email", single);
    dataInfo();
    // eslint-disable-next-line
  }, [single]);

  console.log("repository", single);
  console.log(formik.values);

  return (
    <>
      {props.loading && <Loader />}
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-6">
              <div className="au-card position-relative min-height-400 px-0">
                <div className="au-card-inner ">
                  <div className="px-5">
                    <h3 className="title-2 tm-b-5">
                      Enter details for Transfer
                    </h3>
                  </div>
                  <div className="px-5 mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <div>
                          <div className="row justify-content-between align-items-end">
                            <label
                              for="Amount"
                              className="text-blue font-sm weight-500 col-lg-8"
                            >
                              Who are you sending to?
                            </label>
                            <button
                              type="button"
                              onClick={() => selectModalToggle()}
                              className="col-lg-4 d-flex align-items-center justify-content-center font-sm btn btn-withdraw"
                            >
                              Select Beneficiary
                            </button>
                          </div>
                          {props.alertType && (
                            <div className={`font-sm ${props.alertType}`}>
                              {props.message}
                            </div>
                          )}
                        </div>
                        <input
                          type="email"
                          className="text-field mt-2"
                          placeholder="Enter recipient’s email"
                          name="email"
                          {...formik.getFieldProps("email")}
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.email}
                        </p>
                      )}
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          How much would you like to send?
                        </label>
                        {/* <input
                          type="number"
                          className="text-field mt-2"
                          placeholder="Amount (N)"
                          {...formik.getFieldProps("amount")}
                        /> */}

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
                      </div>
                      {formik.touched.amount && formik.errors.amount && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.amount}
                        </p>
                      )}
                      <div className="text-field mt-4 d-flex align-items-center justify-content-between">
                        <h6 className="weight-600 text-blue">
                          Save beneficiary
                        </h6>
                        <label className="switch mb-0">
                          <input
                            type="checkbox"
                            value={true}
                            {...formik.getFieldProps("save")}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>

                      <div className="form-group mt-5">
                        <button
                          type="button"
                          onClick={modalToggle}
                          className="btn login-submit"
                          //   data-toggle="modal"
                          //   data-target="#confirmTransfer"
                        >
                          NEXT
                        </button>
                      </div>
                      {modalInOpen && (
                        <Modal
                          setModal={setModalInOpen}
                          objects={formik.values}
                          onSubmit={formik.handleSubmit}
                          close={close}
                        />
                      )}
                      {selectModalOpen && (
                        <SelectModal
                          beneficiary={beneficiary}
                          single={single}
                          setSingle={setSingle}
                          close={close1}
                        />
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {successModal && (
        <Congrats
          headline1={"Fantastic!"}
          headline2={"Successful fund transfer"}
          content={
            "You have transferred NXXXX.XX to Isaac Newton (isacc.newton@gmail.com)"
          }
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, message, alertType } = state.registration;

  return { loading, message, alertType };
};

const actionCreators = {
  getData: usersActions.getInfo,
  transfer: usersActions.payPurse,
  // deleteData: usersActions.deleteData,
};

export default connect(mapStateToProps, actionCreators)(Index);
