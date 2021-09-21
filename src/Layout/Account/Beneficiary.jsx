import React, { useEffect, useState } from "react";
import deletes from "../../assets/images/delete-x.svg";
import search from "../../assets/images/search-icon.svg";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import ModalB from "./ModalBeneficiary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Beneficiary = ({ getData, deleteData }) => {
  const [beneficiary, setBeneficiary] = useState([]);
  // const [loading, setloading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  //DELETE BENEFICIARY DATA

  const success = () => {
    toast.success("Beneficiary successfully deleted!", {
      position: toast.POSITION.TOP_CENTER,
    });
    close();
  };
  const deleteBenef = (id) => {
    const obj = {
      id,
    };
    console.log(obj);
    deleteData("/api/v1/user/beneficiary", obj, success);
    dataInfo();
  };

  const modalToggle = () => {
    setModalOpen(true);
  };

  const close = () => {
    setModalOpen(false);
  };

  const dataInfo = async () => {
    const data = await getData("/api/v1/user/beneficiary").then();
    setBeneficiary(data);
  };

  useEffect(() => {
    dataInfo();
   // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <h5 className="get-started-header">Manage Beneficiaries</h5>
                    <div className="small-red-line"></div>
                    <p className="text-blue mt-3">
                      Account / Manage beneficiaries
                    </p>
                  </div>
                  <div className="col-lg-7 px-0 d-flex justify-content-end flex-wrap">
                    <div className="col-lg-5 mt-2">
                      <button
                        onClick={() => modalToggle()}
                        className="btn btn-withdraw"
                        data-toggle="modal"
                        data-target="#addBeneficiary"
                      >
                        Add beneficiary
                      </button>
                    </div>
                    <div className="col-lg-5 mt-2">
                      <div className="form-group position-relative">
                        <input
                          type="search"
                          className="text-field pl-5"
                          placeholder="Search"
                        />
                        <div
                          className="position-absolute"
                          style={{ left: "5%", bottom: "25%" }}
                        >
                          <img
                            src={search}
                            className="img-fluid"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card h-100 blue-border-left">
                <div className="au-card-inner">
                  <div className="px-2">
                    <h3 className="title-2 tm-b-5">Savings</h3>
                  </div>
                  <div className="mt-4 table-responsive">
                    <table className="table table-borderless font-rem1 weight-500">
                      {beneficiary && beneficiary.length > 0 ? (
                        beneficiary.map((person, index) => {
                          return (
                            <>
                              <thead>
                                <tr>
                                  <th>S/N</th>
                                  <th>Name</th>
                                  <th>Email Address</th>
                                  <th className="text-right">
                                    Action (Delete)
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={person}>
                                  <td>{++index}</td>
                                  <td>{person.name}</td>
                                  <td>{person.email}</td>

                                  <td className="text-right">
                                    <button
                                      onClick={() => deleteBenef(person.id)}
                                    >
                                      <img
                                        src={deletes}
                                        className="img-fluid"
                                        alt="delete"
                                      />
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </>
                          );
                        })
                      ) : (
                        <p className="text-danger ">
                          No Beneficiary has been saved!
                        </p>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} hideProgressBar />

      {modalOpen && <ModalB dataInfo={dataInfo} close={close} />}
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

export default connect(mapStateToProps, actionCreators)(Beneficiary);
