import React from "react";
// import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import landingImage from "../../assets/images/landin-first-img.png";
import saveIcon from "../../assets/images/saveIcon.svg";
import investIcon from "../../assets/images/investIcon.svg";
import stashIcon from "../../assets/images/stashIcon.svg";
import phones from "../../assets/images/phones.png";
import whiteDot from "../../assets/images/whiteDot.svg";

const index = () => {
  return (
    <>
      {/* <!--End of Header Top Navigation--> */}
      <main>
        <section className="position-relative section-custom-height">
          <div className="container">
            <div className="row justify-content-between px-4 mt-5">
              <div className="col-lg-6 mt-4">
                <img src={landingImage} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 mt-3">
                <h1 className="text-blue text-right landing-page-header mb-4">
                  Save Small. Live Large{" "}
                </h1>
                <div className="d-flex justify-content-end">
                  <p className="text-dark text-right banner-p col-xl-7 col-lg-10">
                    Let us help you save and invest your money to earn some
                    amazing yield
                  </p>
                </div>
                <div className="d-flex justify-content-end mt-5">
                  <a
                    href="/auth/signup1"
                    className="btn btn-get-started d-flex text-center justify-content-center align-items-center"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0 position-absolute div-shaped">
            <div className="row my-150 mx-0 m-custom-sm">
              <div className="col-lg-12">
                <div className="d-flex flex-column align-items-center mt-5">
                  <div>
                    <h5 className="text-center welcomeText text-blue">
                      Welcome to InvestYield
                    </h5>
                  </div>
                  <div className="col-lg-3 px-0">
                    <p className="text-center welcome-p">
                      The money app that makes it easy to fund your future –
                      while taking care of your now.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="small-red-line"></div>
                  </div>
                </div>
                <div className="d-flex mt-5 justify-content-center">
                  <div className="col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-lg-6 flex-column flex-grow-1 px-1">
                        <div className="row flex-column align-items-end">
                          <div className="col-lg-12 mt-3">
                            <div className="save-div">
                              <div className="d-flex justify-content-between align-items-center">
                                <h5 className="save-div-header text-blue mb-0">
                                  Save
                                </h5>
                                <img
                                  src={saveIcon}
                                  className="img-fluid"
                                  alt="save"
                                />
                              </div>
                              <div className="mt-3">
                                <p>
                                  Free and smart saving tools that enables you
                                  to achieve total financial wellness, while you
                                  earn very impressive interest rates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 mt-3">
                            <div className="invest-div">
                              <div className="d-flex justify-content-between align-items-center">
                                <h5 className="invest-div-header text-green mb-0">
                                  Invest
                                </h5>
                                <img
                                  src={investIcon}
                                  className="img-fluid"
                                  alt="invest"
                                />
                              </div>
                              <div className="mt-4">
                                <p>
                                  Invest in Mutual Funds, Treasury Bills and
                                  Equities. Build your personal investment
                                  portfolios, achieve capital growth and steady
                                  income.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 flex-column flex-grow-1 px-1">
                        <div className="row flex-column align-items-start">
                          <div className="col-lg-8 mt-3">
                            <div className="myPurse-div">
                              <div className="d-flex justify-content-between align-items-center">
                                <h5 className="myPurse-div-header text-brown mb-0">
                                  myPurse
                                </h5>
                                <img
                                  src={stashIcon}
                                  className="img-fluid"
                                  alt="myPurse"
                                />
                              </div>
                              <div className="mt-4">
                                <p>
                                  Set money aside for emergency funds or other
                                  recurring expenses such as TGIF or movie
                                  tickets, while earning very impressive
                                  interest rates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-10 mt-3">
                            <div className="earnInterest-div">
                              <div className="d-flex justify-content-between align-items-center">
                                <h5 className="earnInterest-header text-earn-red mb-0">
                                  Earn Interests
                                </h5>
                              </div>
                              <div className="mt-4">
                                <p>
                                  Earn highest possible interest rates on your
                                  savings.
                                </p>
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
          </div>
        </section>
        <section className="bg-white py-80">
          <div className="container-fluid px-4">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="get-started-header text-center">
                  Get started in few minutes.
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="small-red-line"></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-xl-5">
                <div className="mt-50 p-4 get-started-info-div">
                  <div className="d-flex align-items-baseline">
                    <h6 className="mb-0 get-started-numbers text-blue">01</h6>
                    <div className="px-3">
                      <h5 className="get-started-header-sm">
                        Create an account
                      </h5>
                      <div className="col-lg-8 px-0">
                        <p className="get-started-p mb-0">
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline mt-80">
                    <h6 className="mb-0 text-green">02</h6>
                    <div className="px-3">
                      <h5 className="get-started-header-sm">
                        Link a payment method
                      </h5>
                      <div className="col-lg-8 px-0">
                        <p className="get-started-p mb-0">
                          Using your debit card, bank account, USSD, QR Code,
                          setup your first plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline mt-80">
                    <h6 className="mb-0 text-orange">03</h6>
                    <div className="px-3">
                      <h5 className="get-started-header-sm">
                        Experience awesome yields
                      </h5>
                      <div className="col-lg-8 px-0">
                        <p className="get-started-p mb-0">
                          Sit back, relax & let your money yield awesome rewards
                          for you all day, everyday.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <img src={phones} className="img-fluid" alt="Phones" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex justify-content-center mt-80">
                  <a
                    href="/auth/signup1"
                    className="btn btn-get-started d-flex text-center justify-content-center align-items-center w-100"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid px-0">
            <div className="banner-img2">
              <div className="overlay2 p-4 pb-5 d-flex align-items-center">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center pt-4">
                      <h5 className="why-header">Why InvestYield?</h5>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="small-white-line"></div>
                    </div>
                    <div className="row justify-content-between mt-40">
                      <div className="col-lg-5 px-0">
                        <div className="d-flex align-items-baseline mt-80">
                          <img src={whiteDot} className="img-fluid" alt="dot" />
                          <div className="px-3">
                            <h5 className="why-sub-headers">
                              Experience awesome yields
                            </h5>
                            <div className="mt-4 col-lg-10 px-0">
                              <p className="why-p mb-0">
                                Automated, Goal-Based Financial Tools that
                                Foster Strong Saving, Spending and Investing
                                Habits. Earn yields up to 12%pa on your Savings
                                Plans
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 px-0">
                        <div className="d-flex align-items-baseline mt-80">
                          <img src={whiteDot} className="img-fluid" alt="dot" />
                          <div className="px-3">
                            <h5 className="why-sub-headers">
                              Save in USD dollars
                            </h5>
                            <div className="mt-4 col-lg-10 px-0">
                              <p className="why-p mb-0">
                                Sit back, relax & let your money yield awesome
                                rewards for you all day, everyday.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between mt-40">
                      <div className="col-lg-5 px-0">
                        <div className="d-flex align-items-baseline mt-80">
                          <img src={whiteDot} className="img-fluid" alt="dot" />
                          <div className="px-3">
                            <h5 className="why-sub-headers">
                              State-of-the-art data encryption
                            </h5>
                            <div className="mt-4 col-lg-10 px-0">
                              <p className="why-p mb-0">
                                We use only the highest levels of Banking
                                Security, secured by 256 bits SSL security
                                encryption, to ensure that your information is
                                completely protected and at all times. Also, we
                                use state-of-the-art data encryption when
                                handling your financial information and
                                two-factor authentication (2FA) protection.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 px-0">
                        <div className="d-flex align-items-baseline mt-80">
                          <img src={whiteDot} className="img-fluid" alt="dot" />
                          <div className="px-3">
                            <h5 className="why-sub-headers">
                              Capital guaranteed investment
                            </h5>
                            <div className="mt-4 col-lg-10 px-0">
                              <p className="why-p mb-0">
                                All funds in your saving plans are invested in
                                low risk, high quality and capital guaranteed
                                investment portfolios managed by our
                                professional fund managers regulated by the SEC.
                              </p>
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
        </section>

        <section className="bg-white pt-5">
          <div className="container-fluid px-4">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="get-started-header text-center pt-5">
                  Testimonial
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="small-red-line"></div>
                </div>
                <p className="text-center mt-5 text-black">
                  See what people are saying about investYield
                </p>
              </div>
              <div className="col-lg-8 offset-lg-2">
                <div className="youtube-embed">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLrYqnlqvIzcwzkBhWKB3DO1T7pqS-Bchm"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
