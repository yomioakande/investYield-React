import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { Link } from "react-router-dom";
import refer from "../../assets/images/referImage.svg";
import copy from "../../assets/images/copyIcon.svg";
// import link from "../../assets/images/share-linkIcon.svg";
import QRCode from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  // InstapaperShareButton,
  // InstapaperIcon,
  // ShareButtons,
  // ShareCounts,
  // generateShareIcon,
} from "react-share";

const Refer = (props) => {
  const Ref = useRef(null);
  const [referCode, setReferCode] = useState("");

  useEffect(() => {
    (async function dataInfo() {
      const datas = await props.getRefer("/api/v1/user/referral").then();
      setReferCode(datas);
    })();
    //eslint-disable-next-line
  }, []);
  const success = () => {
    toast.success("Referral Code copied!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const copyText = (e) => {
    navigator.clipboard.writeText(referCode);
    success();
  };

  const referral = `${process.env.REACT_APP_FRONTEND_URL}/signup1/${referCode}`;
  console.log(referral);
  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">Account</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">Account / Refer and Earn</p>
                  </div>
                  <div className="col-lg-7 px-0 d-flex justify-content-end flex-wrap">
                    <div className="col-lg-5 mt-2">
                      <Link
                        to="/app/account/transfer"
                        className="btn btn-transfer"
                      >
                        Transfer Funds
                      </Link>
                    </div>
                    <div className="col-lg-5 mt-2">
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
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={refer} className="img-fluid" alt="Refer" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <p>
                          Use the referral code and link to invite your friends.
                          For every referral, points are awarded which can be
                          used to get awesome rewards.
                        </p>
                        <div className="d-flex mt-5">
                          <input
                            type="text"
                            ref={Ref}
                            disabled
                            value={referCode}
                            className="referal-link-div shadow d-flex justify-content-center align-items-center px-4 w-100"
                          />

                          <button
                            onClick={copyText}
                            className="copy-referal-link px-3 d-flex align-items-center"
                          >
                            <img src={copy} className="img-fluid" alt="" />
                            <span className="px-2 text-light font-rem1">
                              Copy
                            </span>
                          </button>
                        </div>
                        <div className="mt-30">
                          <a
                            href={`${process.env.REACT_APP_MAIN_URL}/signup1/${referCode}`}
                            className="share-referral-link d-flex justify-content-center align-items-center"
                          >
                            {" "}
                            <div style={{ display: "flex" }}>
                              <TwitterShareButton
                                url={referral}
                                quota={
                                  "Are you ready for the next generation financial investments, register on InvestYield using my Referral link"
                                }
                                className="Demo__some-network__share-button"
                              >
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>

                              <EmailShareButton
                                url={referral}
                                quota={
                                  "Are you ready for the next generation financial investments, register on InvestYield using my Referral link"
                                }
                                className="Demo__some-network__share-button"
                              >
                                <EmailIcon size={32} round />
                              </EmailShareButton>
                              <WhatsappShareButton
                                url={referral}
                                quota={
                                  "Are you ready for the next generation financial investments, register on InvestYield using my Referral link"
                                }
                                className="Demo__some-network__share-button"
                              >
                                <WhatsappIcon size={32} round />
                              </WhatsappShareButton>

                              <FacebookShareButton
                                url={referral}
                                quota={
                                  "Are you ready for the next generation financial investments, register on InvestYield using my Referral link"
                                }
                                className="Demo__some-network__share-button"
                              >
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>

                             
                            </div>
                            {/* <img
                              src={link}
                              className="img-fluid"
                              alt="Share Link"
                            /> */}
                            <span className="px-2 text-blue">
                              Share referral link
                            </span>
                          </a>
                        </div>
                        <div
                          className="mt-3"
                          style={{ width: "20%", margin: "0 auto" }}
                        >
                          <QRCode
                            size={120}
                            width={100}
                            value={`${process.env.REACT_APP_MAIN_URL}/signup1/${referCode}`}
                          />
                        </div>
                      </div>
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
  return null;
};

const actionCreators = {
  getRefer: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Refer);
