import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import SelectModal from "./SelectModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";

const Index = (props) => {
  const [modalInOpen, setModalInOpen] = useState(false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const [beneficiary, setBeneficiary] = useState("");
  const [single, setSingle] = useState("");

  const modalToggle = () => {
    setModalInOpen(true);
  };

  const selectModalToggle = () => {
    setSelectModalOpen(!selectModalOpen);
  };

  const close = () => {
    setModalInOpen(false);
  };

  const close1 = () => {
    setSelectModalOpen(false);
  };

  const initialValues = {
    email: single,
    amount: "",
    save:""
  };

  const validationSchema = Yup.object({
    identifier: Yup.string().required("This field is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // setShowError(true);
    const obj = {
      identifier: values.identifier,
      type: values.identifier.split("").includes("@") ? "0" : "1",
    };

    console.log(obj);
    // modalBenf(obj, "/api/v1/user/resolve_beneficiary", setModal);
    // onSubmitProps.resetForm();
    // show();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const dataInfo = async () => {
    const data = await props.getData("/api/v1/user/beneficiary").then();
    setBeneficiary(data);
    console.log(data);
  };
  console.log("papr", beneficiary);

  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  console.log("repository", single);

  return (
    <>
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
                              // href="/app/account"
                              className="col-lg-4 d-flex align-items-center justify-content-center font-sm btn btn-withdraw"
                            >
                              Select Beneficiary
                            </button>
                          </div>
                        </div>
                        <input
                          type="email"
                          className="text-field mt-2"
                          placeholder="Enter recipient’s email"
                          name="email"
                          {...formik.getFieldProps("email")}
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          How much would you like to send?
                        </label>
                        <input
                          type="text"
                          className="text-field mt-2"
                          placeholder="Amount (N)"
                        />
                      </div>
                      <div className="text-field mt-4 d-flex align-items-center justify-content-between">
                        <h6 className="weight-600 text-blue">
                          Save beneficiary
                        </h6>
                        <label className="switch mb-0">
                          <input type="checkbox" />
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalInOpen && <Modal close={close} />}
      {selectModalOpen && (
        <SelectModal
          beneficiary={beneficiary}
          single={single}
          setSingle={setSingle}
          close={close1}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  // const { alert } = state;
  const username = state.authentication.user;
  const { type, message } = state.alert;
  // const loading = state.authentication.loading;
  return { type, message, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
  deleteData: usersActions.deleteData,
};

export default connect(mapStateToProps, actionCreators)(Index);
