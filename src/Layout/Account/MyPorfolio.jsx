import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { nairaCurrencyVal, dollarCurrencyVal } from "../../helpers/helper";
import Loader from "../../common/Loader";
const MyPorfolio = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setloading] = useState([]);

  useEffect(() => {
    setloading(true);
    (async function dataInfo() {
      const data = await props
        .getPortfolio("/api/v1/user/portfolio_summary")
        .then();
      setPortfolio(data);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);



  return (
    <>
    {loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row  justify-content-between">
            <div className="col-lg-3">
              <h5 className="get-started-header">My Portfolio</h5>
              <div className="small-red-line"></div>
              <p className="text-blue mt-3">My Portfolio / View Portfolio</p>
            </div>
            <div className="col-lg-5 d-flex justify-content-between cg-3">
              <div className="mt-2 flex-grow-1 w-auto">
                <Link to="/app/account/transfer" className="btn btn-transfer">
                  Transfer Funds
                </Link>
              </div>
              <div className="mt-2 flex-grow-1 w-auto">
                <Link to="/app/account/withdraw" className="btn btn-withdraw">
                  Withdraw Funds
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7">
              <div className="au-card h-100 blue-border-left">
                <div className="au-card-inner">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">Savings</h3>
                  </div>
                  <div className="mt-4 table-responsive">
                    <table className="table table-borderless font-rem1 weight-500">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>Savings balance</td>
                          <td className="text-blue text-right">
                            {nairaCurrencyVal(
                              portfolio?.savings?.totalSavingsBal
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Naira savings</td>
                          <td className="text-blue text-right">
                            {nairaCurrencyVal(portfolio?.savings?.totalNaira)}
                          </td>
                        </tr>
                        <tr>
                          <td>Naira Interest earned</td>
                          <td className="text-blue text-right">
                            {nairaCurrencyVal(
                              portfolio?.savings?.totalNairaInterest
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Dollar savings</td>
                          <td className="text-blue text-right">
                            {dollarCurrencyVal(portfolio?.savings?.totalDollar)}
                          </td>
                        </tr>
                        <tr>
                          <td>Dollar interest earned</td>
                          <td className="text-blue text-right">
                            {dollarCurrencyVal(
                              portfolio?.savings?.totalDollarInterest
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="au-card  green-border-left">
                <div className="au-card-inner">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">Investments</h3>
                  </div>
                  <div className="mt-4 table-responsive">
                    <table className="table table-borderless font-rem1 weight-500">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>Investment balance</td>
                          <td className="text-blue text-right">
                            {nairaCurrencyVal(
                              portfolio?.investment?.totalInvetmentBal
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Naira investments</td>
                          <td className="text-blue text-right">
                            {nairaCurrencyVal(
                              portfolio?.investment?.investmentNairaBal
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Dollar investments</td>
                          <td className="text-blue text-right">
                            {dollarCurrencyVal(
                              portfolio?.investment?.investmentDollarBal
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="au-card mt-4 yellow-border-left">
                <div className="au-card-inner ">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">myPurse</h3>
                  </div>

                  <div className="mt-4">
                    <div className="table-responsive">
                      <table className="table table-borderless font-rem1 weight-500">
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td>Total balance</td>
                            <td className="text-blue text-right">
                              {nairaCurrencyVal(
                                portfolio?.myPurse?.totalPurseBal
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Naira balance</td>
                            <td className="text-blue text-right">
                              {nairaCurrencyVal(
                                portfolio?.myPurse?.purseNairaBal
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Dollar balance</td>
                            <td className="text-blue text-right">
                              {dollarCurrencyVal(
                                portfolio?.myPurse?.purseDollarBal
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
  getPortfolio: usersActions.getPortfolio,
};

export default connect(mapStateToProps, actionCreators)(MyPorfolio);
