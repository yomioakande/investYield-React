import React, { useState } from "react";
import Modal from "./Modal";
const Index = () => {
  const [modalInOpen, setModalInOpen] = useState(false);

  const modalToggle = () => {
    setModalInOpen(true);
  };

  const close = () => {
    setModalInOpen(false);
  };

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
                    <form action="">
                      <div className="form-group">
                        <div>
                          <div className="row justify-content-between align-items-end">
                            <label
                              for="Amount"
                              className="text-blue font-sm weight-500 col-lg-8"
                            >
                              Who are you sending to?
                            </label>
                            <a
                              href="#"
                              className="col-lg-4 d-flex align-items-center justify-content-center font-sm btn btn-withdraw"
                            >
                              Select Beneficiary
                            </a>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="text-field mt-2"
                          placeholder="Enter recipient’s email"
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
    </>
  );
};

export default Index;
