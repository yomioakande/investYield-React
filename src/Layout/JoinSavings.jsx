import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import { nairaCurrencyVal, dateConverter } from "../helpers/helper";
import challenge from "../assets/images/savingschallenge.svg";
import challengeImg from "../assets/images/targetImgSmall.svg";

const JoinSavings = ({ getData }) => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    (async function dataInfo() {
      const data = await getData("/api/v1/user/public_group_savings").then();
      setAccounts(data);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="au-card-inner ">
        <div className="px-4">
          <h3 className="title-2 tm-b-5">Join a savings challenge</h3>
        </div>
        <div className="position-relative wecare-sec mx-4">
          <div
            style={{ marginTop: "1rem" }}
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" style={{ display: "none" }}>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={challenge}
                  alt="First slide"
                />
              </div>
              {accounts.length > 0 ? (
                accounts.map((single, index) => {
                  return (
                    <Link
                      to={{
                        pathname: `/app/groupsavings/joingroup1/${single?.id}`,
                        state: {
                          data: single,
                        },
                      }}
                      key={single?.id}
                      className="carousel-item"
                    >
                      <div className="saving-challenge-div">
                        <div className="row justify-content-between align-items-center">
                          <a href="#" className="col-md-6">
                            <div className="mb-3">
                              <h6 className="text-light font-14px">
                                {single?.name}
                              </h6>
                              <p className="text-light font-10px mb-2">
                                Target savings challenge
                              </p>
                              <div className="small-white-line "></div>
                            </div>
                            <button
                              href="#"
                              type="button"
                              className="text-light font-14px"
                            >
                              Join now
                            </button>
                          </a>
                          <div className="col-md-6">
                            <div className="target-div-white">
                              <div className="d-flex justify-content-between">
                                <p className="font-8px text-dark">Target</p>
                                <img
                                  src={challengeImg}
                                  className="img-fluid"
                                  alt="target"
                                />
                              </div>
                              <div className="mt-2 font-12px">
                                <h6 className="text-green">
                                  {nairaCurrencyVal(single?.target)}
                                </h6>
                                <div className="progress mt-2">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="table-responsive">
                                <table className="table table-borderless w-100">
                                  <thead>
                                    <tr>
                                      <th className="font-8px p-0">Date</th>
                                      <th className="font-8px p-0">Saves</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="font-6px f-weight-600 text-green p-0">
                                        {dateConverter(single?.startDate)}
                                      </td>
                                      <td className="font-6px f-weight-600 text-green p-0">
                                        {nairaCurrencyVal(single?.contribution)}{" "}
                                        / {single?.frequency}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <button className="btn iy-btn-primary target-saving-btn  d-flex align-items-center justify-content-center text-white mt-2">
                                SAVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <img
                        className="d-block w-100"
                        src={single?.imageUrl || challenge}
                        alt="First slide"
                      /> */}
                    </Link>
                  );
                })
              ) : (
                <p>No Accounts</p>
              )}
            </div>
            <a
              style={{ display: "none" }}
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              style={{ display: "none" }}
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div
            style={{ marginTop: "3rem" }}
            className="d-flex align-items-center justify-content-between"
          >
            <div>
              <a
                className="swiper-button-next carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                {/* <span></span> */}
              </a>
              <a
                className="swiper-button-prev carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                {/* <span></span> */}
              </a>
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
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(JoinSavings);
