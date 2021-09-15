import React from "react";
import Style from "../style";
import SingleCard from "./SingleCard";
import WithdrawalAccount from "./WithdrawalAccount";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
// import Loader from "../../../common/Loader";

const Index = (props) => {
  return (
    <>
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
                  <div
                    className="col-lg-5
                          px-0
                          d-flex
                          justify-content-between
                          cg-3
                        "
                  >
                    <div className="mt-2 flex-grow-1 w-auto">
                      <button className="btn btn-transfer">
                        Transfer Funds
                      </button>
                    </div>
                    <div className="mt-2 flex-grow-1 w-auto">
                      <button className="btn btn-withdraw">
                        Withdraw Funds
                      </button>
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
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="#pills-debitCard-tab"
                          data-toggle="pill"
                          href="#pills-debitCard"
                          role="tab"
                          aria-controls="#pills-debitCard"
                          aria-selected="true"
                        >
                          My Debit Cards
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-pills-withdrawalAccount-tab"
                          data-toggle="pill"
                          href="#pills-withdrawalAccount"
                          role="tab"
                          aria-controls="pills-withdrawalAccount"
                          aria-selected="false"
                        >
                          Withdrawal account
                        </a>
                      </li>
                    </ul>
                  </Style>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-debitCard"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-xl-4 col-lg-6">
                          <button className="btn login-submit">
                            Add New Card
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <SingleCard />
                        <SingleCard />
                        <SingleCard />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
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
  // const loading = state.authentication.loading;
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Index);
