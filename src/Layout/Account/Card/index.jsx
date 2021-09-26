import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "../style";
import SingleCard from "./SingleCard";
import WithdrawalAccount from "./WithdrawalAccount";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import Loader from "../../../common/Loader";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = (props) => {
  const [cards, setCards] = useState([]);
  const dataInfo = async () => {
    const data = await props.getCards("/api/v1/user/card").then();
    setCards(data);
  };

  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  const success = () => {
    toast.success("Debit Card deleted!", {
      position: toast.POSITION.TOP_CENTER,
    });
    dataInfo();
  };

  const deleteCard = (id) => {
    const obj = {
      id,
    };
    props.deleteCards("/api/v1/user/card", obj, success);
  };

  return (
    <>
      {props.loading && <Loader />}

      <ToastContainer autoClose={1000} hideProgressBar />

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">My Portfolio</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">
                      My Portfolio / Security Settings
                    </p>
                  </div>
                  <div className="col-lg-5 px-0 d-flex justify-content-between cg-3">
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link
                        to="/app/account/transfer"
                        className="btn btn-transfer"
                      >
                        Transfer Funds
                      </Link>
                    </div>
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link
                        to="/app/account/withdraw"
                        className="btn btn-withdraw"
                      >
                        Withdraw Funds
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card h-100">
                <div className="au-card-inner">
                  <Style>
                    <ul
                      className="nav nav-pills mb-5"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          id="pills-pills-withdrawalAccount-tab"
                          data-toggle="pill"
                          href="#pills-withdrawalAccount"
                          role="tab"
                          aria-controls="pills-withdrawalAccount"
                          aria-selected="true"
                        >
                          Withdrawal account
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="#pills-debitCard-tab"
                          data-toggle="pill"
                          href="#pills-debitCard"
                          role="tab"
                          aria-controls="#pills-debitCard"
                          aria-selected="false"
                        >
                          My Debit Cards
                        </a>
                      </li>
                    </ul>
                  </Style>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade"
                      id="pills-debitCard"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-xl-4 col-lg-6">
                          <button
                            onClick={async () => await props.addCard().then()}
                            className="btn login-submit"
                          >
                            Add New Card
                          </button>
                        </div>
                      </div>
                      <>
                        <Wrapper className="row">
                          {cards && cards.length > 0
                            ? cards.map((single, index) => {
                                return (
                                  <SingleCard
                                    key={index}
                                    single={single}
                                    deleteCard={deleteCard}
                                  />
                                );
                              })
                            : null}
                        </Wrapper>
                      </>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="pills-withdrawalAccount"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <WithdrawalAccount />
                    </div>
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
  const { loading } = state.registration;
  return { alert, username, loading };
};

const actionCreators = {
  getCards: usersActions.getInfo,
  addCard: usersActions.addCard,
  deleteCards: usersActions.deleteData,
};

export default connect(mapStateToProps, actionCreators)(Index);

const Wrapper = styled.div`
  /* border: 1px solid red ; */
  /* width: 110px !important; */
  height: 30rem !important ;
  overflow: scroll !important ;
`;
