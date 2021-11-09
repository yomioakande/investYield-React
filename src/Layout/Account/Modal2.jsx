import React from "react";
import ReactDom from "react-dom";
import modalclose from "../../assets/images/modal-close.svg";
import { OVERLAY, ModalBox } from "./ModalBeneficiary";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import Loader from "../../common/Loader";
import Swal from "sweetalert2";

const Modal2 = ({ dataInfo, modalBenf2, close, loading }) => {
  const addBeneficiary = JSON.parse(sessionStorage.getItem("addBenef"));

  const success = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      position: "center",
      icon: "success",
      iconColor: "#003079",
      title: "Beneficiary successfully added!",
      titleColor: "#fff",
      showConfirmButton: false,
      timer: 1500,
    });
    dataInfo();
    close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: addBeneficiary.id,
    };
    modalBenf2(obj, "/api/v1/user/beneficiary", success);
  };

  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <>
          {loading && <Loader />}
          <div
            className=""
            tabindex="-1"
            role="dialog"
            data-backdrop="static"
            data-keyboard="false"
            // id="addBeneficiary"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  onClick={() => close()}
                  className="d-flex modal-close-link"
                  data-dismiss="modal"
                >
                  <span className="px-2">close</span>
                  <img src={modalclose} className="img-fluid" alt="close" />
                </button>
                <div className="modal-body p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="text-blue">Add beneficiary</h3>
                      <div className="small-red-line"></div>
                      <form onSubmit={handleSubmit} className="mt-5">
                        <div className="form-group">
                          <input
                            type="text"
                            className="text-field"
                            placeholder="Enter beneficiary email"
                            value={addBeneficiary.identifier}
                            disabled
                          />
                        </div>
                        <p
                          className="text-blue text-left"
                          style={{ fontSize: ".9rem" }}
                        >
                          {addBeneficiary?.name}
                        </p>

                        <div className="row mt-5 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button
                                  onClick={() => close()}
                                  className="btn btn-cancel text-danger"
                                >
                                  Cancel
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <button
                                  className="btn login-submit"
                                  data-toggle="modal"
                                  data-target="#newGroupDetails"
                                  data-dismiss="modal"
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
        </>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => {
  const { loggingIn, loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  modalBenf2: usersActions.postFeedBack,
};

export default connect(mapStateToProps, actionCreators)(Modal2);
