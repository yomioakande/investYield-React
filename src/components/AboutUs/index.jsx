import React from "react";
import BigImg from "../../assets/images/aboutUs-BigImg.png";
import PhoneImg from "../../assets/images/aboutUs-PhoneImg.png";
import teamImg from "../../assets/images/teamImg.png";

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
                      A company that seeks to provide inclusive wealth
                      management services to segments of the market currently
                      neglected and underserved by the traditional wealth
                      management companies connecting these segments of the
                      market to these services through robust technology
                      infrastructure.
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
                <h5 className="aboutUs-header">Meet The Team</h5>
                <div className="small-red-line"></div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
                    </div>
                    <div className="border-decor position-absolute"></div>
                  </div>
                </div>
              </div>
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
                      <h5 className="text-center weight-600">Kayode Adegoke</h5>
                      <p className="text-center mb-0">CEO</p>
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
