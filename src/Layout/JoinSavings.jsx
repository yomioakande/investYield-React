import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import challenge from "../assets/images/savingschallenge.svg";
const JoinSavings = (props) => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    (async function dataInfo() {
      const data = await props
        .getInfo("/api/v1/user/public_group_savings")
        .then();
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
                      <img
                        className="d-block w-100"
                        src={single?.imageUrl || challenge}
                        alt="First slide"
                      />
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
              ></a>
              <a
                className="swiper-button-prev carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              ></a>
            </div>
            {/* <a href="/" className="au-btn-link">
                        View more
                      </a> */}
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
  getInfo: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(JoinSavings);
