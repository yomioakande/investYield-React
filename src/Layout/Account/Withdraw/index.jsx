import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../../../redux/actions";
import Loader from "../../../common/Loader";


import withdraw from "../../../assets/images/withdrawFundIcon.svg";
const Index = (props) => {

  const [bankDetails, setBankDetails] = useState({});
  const [loading, setloading] = useState(false);
  const dataInfo = async () => {
    setloading(true);
    const account = await props.getAccount("/api/v1/user/bankaccount").then();
    setBankDetails({ ...account });
    setloading(false);
  };
  useEffect(() => {
    dataInfo();
    //eslint-disable-next-line
  }, []);




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
                    <form action="">
                      <div className="form-group">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          How much would you like to withdraw today?
                        </label>
                        <input
                          type="text"
                          className="text-field"
                          placeholder="Amount (N)"
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          What is the pupose for withdrawal? (optional)
                        </label>
                        <select className="text-field">
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
                        </select>
                      </div>
                      <div className="form-group mt-4">
                        <label
                          for="Amount"
                          className="text-blue font-sm weight-500"
                        >
                          Where would you like to withdraw from?
                        </label>
                        <select className="text-field">
                          <option value="purpose" selected="selected" disabled>
                            Withdraw from
                          </option>
                          <option value="vibe">Vibe cash</option>
                        </select>
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
  getAccount: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Index);
