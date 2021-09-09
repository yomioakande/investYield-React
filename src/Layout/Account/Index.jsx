import React from "react";
import {Link} from "react-router-dom"
import savings from "../../assets/images/savingschallenge.svg";
import userIcon from "../../assets/images/userIcon.svg";
import supportIcon from "../../assets/images/supportIcon.svg";
import settings from "../../assets/images/cardSettingsIcon.svg";
import referIcon from "../../assets/images/referIcon.svg";
import beneficiary from "../../assets/images/mgBeneficiariesIcon.svg";
import securityIcon from "../../assets/images/securityIcon.svg";
import MenuBar from "../Account/MenuBar";


const Index = () => {
  return (
    <>
      <div className="section__content section__content--p30 py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <h5 className="get-started-header">Account</h5>
                    <div className="small-red-line"></div>
                    <p className="text-blue mt-3">My Portfolio</p>
                  </div>
                  <div className="col-lg-5 px-0 d-flex justify-content-between cg-3">
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
            <div className="col-lg-7 col-md-8 d-flex flex-column mb-3">
              <div className="au-card d-flex justify-content-between align-items-center flex-grow-1">
                <div className="au-card-inner w-100">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 profile-cards col-md-6">
                      {/* <canvas id="myChart" width="800" height="550"></canvas> */}
                    </div>
                    <div className="col-lg-5 w-auto profile-cards col-md-4 mt-3">
                      <Link to="/app/account/myportfolio" style={{color:"#0553C8", textDecoration:"underline",fontWeight:"bold"}}>View My Portfolio</Link>
                      <ul className="pie-text mt-3">
                        <li className="mb-3 text-green">
                          <p>Total Naira Savings</p>
                          <p>₦10,000.00</p>
                        </li>
                        <li className="mb-3 text-blue">
                          <p>Total Dollar Savings</p>
                          <p>₦10,000.00</p>
                        </li>
                        <li className="mb-3 text-yellow">
                          <p>Total Purse Cash</p>
                          <p>₦10,000.00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 d-flex flex-column mb-3">
              <div className="au-card position-relative px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">Join a savings challenge</h3>
                  </div>
                  <div className="position-relative wecare-sec mx-4">
                    <div className="swiper-container position-relative wecare-slider">
                      <div className="swiper-wrapper py-2">
                        <div className="swiper-slide">
                          <div className="w-100 h-100">
                            <div className="container h-100">
                              <div className="row h-100 py-3 mb-4">
                                <div className="au-message-list w-100 todolist mt-4">
                                  <img
                                    src={savings}
                                    className="img-fluid w-100"
                                    alt="join a savings challenge"
                                  />
                                </div>
                                {/* <!-- .col --> */}
                              </div>
                              {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                          </div>
                          {/* <!-- .hero-content-overlay --> */}
                        </div>
                        {/* <!-- .hero-content-wrap --> */}

                        <div className="swiper-slide">
                          <div className="w-100 h-100">
                            <div className="container h-100">
                              <div className="row h-100 py-3 mb-4">
                                <div className="au-message-list w-100 todolist mt-4">
                                  <img
                                    src={savings}
                                    className="img-fluid w-100"
                                    alt="join a savings challenge"
                                  />
                                </div>
                                {/* <!-- .col --> */}
                              </div>
                              {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                          </div>
                          {/* <!-- .hero-content-overlay --> */}
                        </div>
                        {/* <!-- .hero-content-wrap --> */}
                      </div>
                      {/* <!-- .swiper-wrapper --> */}
                    </div>
                    <div className="d-flex">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <MenuBar image={userIcon} menuText={" My Account Settings"} link={"/app/account/profile"}/>
            <MenuBar image={supportIcon} menuText={"Support"} link={"/app/account/support"} />
            <MenuBar image={settings} menuText={"My Card and Bank Settings"} link={""}/>
            <MenuBar image={referIcon} menuText={"Refer and Earn"} link={"/app/account/refer"} />
            <MenuBar image={beneficiary} menuText={"Manage Beneficiaries"} link={"/app/account/beneficiary"}/>
            <MenuBar image={securityIcon} menuText={"My Security Settings"} link={"/app/account/changepassword"} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
