import React from "react";
import BigImg from "../../assets/images/aboutUs-BigImg.png";
import PhoneImg from "../../assets/images/aboutUs-PhoneImg.png";
import teamImg from "../../assets/images/teamImg.png";
import OlumideSosanmi from "../../assets/images/OlumideSosanmi.png";
import JadesolaAdekoya from "../../assets/images/JadesolaAdekoya.png";
import RaymondChen from "../../assets/images/RaymondChen.png";

const Index = () => {
  return (
    <>
      <main>
        <section className="">
          <div className="container-fluid px-0">
            <div className="col-lg-12 px-5">
              <div className="d-flex justify-content-center">
                <div className="col-lg-6 px-0 mt-60">
                  <div className="">
                    <h5 className="aboutUs-header text-center">
                      Building a community of smart savers with a smart saving
                      culture.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-lg-8 px-0 mt-5">
                  <div className="">
                    <img src={BigImg} className="img-fluid" alt="About Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="col-lg-12 mt-60">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-lg-6 px-0">
                  <div className="bg-grey pp-custom">
                    <h5 className="aboutUs-header">Who We Are</h5>
                    <div className="small-red-line"></div>
                    <p className="mt-5 whoWeAre-p">
                      We are a licensed financial cooperative with registration
                      number LSCS 17462 and in partnership with licensed wealth
                      managers to provide inclusive wealth management solutions.
                      We offer highest possible returns, security, speed,
                      flexibility, investment insights and disciplined-instilled
                      money management tools to help you achieve your big money
                      goals. Our vision is to build Africa's biggest community
                      of smart money savers through service and robust
                      technology.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 px-0">
                  <div>
                    <img src={PhoneImg} className="img-fluid" alt="Phones" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="row mt-60">
              <div className="col-lg-12">
                <h5 className="aboutUs-header pb-1">Meet The Team</h5>
                <div className="small-red-line"></div>
                <p className="py-3">
                  The team is composed of seasoned professionals with diverse
                  skills in finance, investment management, banking, software
                  engineering and data sciences to ensure you get the best in
                  class experience.
                </p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-4 mt-4">
                <div className="team-div shadow d-flex flex-column">
                  <div>
                    <img
                      src={teamImg}
                      className="img-fluid w-100"
                      alt="Team member pic"
                    />
                  </div>
                  <div className="p-4 bg-white position-relative detail-div">
                    <div className="">
                      <h5 className="text-center weight-600 team-name">
                        Olayemi Lasisi
                      </h5>
                      <p className="text-center mb-0 team-portfolio">
                        Technology and Innovation
                      </p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="team-div shadow d-flex flex-column">
                  <div>
                    <img
                      src={OlumideSosanmi}
                      className="img-fluid w-100"
                      alt="Team member pic"
                    />
                  </div>
                  <div className="p-4 bg-white position-relative detail-div">
                    <div className="">
                      <h5 className="text-center weight-600 team-name">
                        Olumide Sosanmi
                      </h5>
                      <p className="text-center mb-0 team-portfolio">
                        Communication and Community Management
                      </p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="team-div shadow d-flex flex-column">
                  <div>
                    <img
                      src={JadesolaAdekoya}
                      className="img-fluid w-100"
                      alt="Team member pic"
                    />
                  </div>
                  <div className="p-4 bg-white position-relative detail-div">
                    <div className="">
                      <h5 className="text-center weight-600">
                        Jadesola Adekoya
                      </h5>
                      <p className="text-center mb-0 team-portfolio">
                        Product and Research Analyst
                      </p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="team-div shadow d-flex flex-column">
                  <div>
                    <img
                      src={RaymondChen}
                      className="img-fluid w-100"
                      alt="Team member pic"
                    />
                  </div>
                  <div className="p-4 bg-white position-relative detail-div">
                    <div className="">
                      <h5 className="text-center weight-600">Raymond Chen</h5>
                      <p className="text-center mb-0 team-portfolio">
                        Data Science and Operations
                      </p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
