import React from "react";
import family from "../../assets/images/Family-pana1.svg";
import home from "../../assets/images/homeimg.svg";
import emergency from "../../assets/images/emergencyImg.svg";
import vacation from "../../assets/images/vacationImg.svg";
import wedding from "../../assets/images/weddingImg.svg";
import celebration from "../../assets/images/celebrationImg.svg";
import retirement from "../../assets/images//retirementImg.svg";
import Card from "./Card";
const CreateSavings = () => {
  return (
    <>
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header">Savings</h5>
              <div className="small-red-line"></div>
              <p className="text-blue mt-3">
                Savings / Individual Savings Plan
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="title-2">What are you saving for?</div>
                  </div>

                  <div className="row mt-4">
                    <Card
                      link={"/"}
                      image={family}
                      text={"Family"}
                      nameClass={"au-card-bg-retirement"}
                    />
                    <Card
                      link={"/"}
                      image={home}
                      text={"Home"}
                      nameClass={"au-card-bg-homeplan"}
                    />
                    <Card
                      link={"/"}
                      image={emergency}
                      text={"Emergency"}
                      nameClass={"au-card-bg-emergency"}
                    />
                    <Card
                      link={"/"}
                      image={vacation}
                      text={"Vacation"}
                      nameClass={"au-card-bg-movie"}
                    />
                    <Card
                      link={"/"}
                      image={wedding}
                      text={"Wedding"}
                      nameClass={"au-card-bg-wedding"}
                    />
                    <Card
                      link={"/"}
                      image={celebration}
                      text={"Celebration"}
                      nameClass={"au-card-bg-family"}
                    />
                    <Card
                      link={"/"}
                      image={retirement}
                      text={"Retirement"}
                      nameClass={"au-card-bg-retirement"}
                    />

                    <a href={"/app/savings/create2/Create"} className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-create-savings-ind flex-grow-1 px-3">
                        <div className="d-flex justify-content-center">
                          <p className="text-create-stash">
                            Create A Savings plan
                          </p>
                        </div>
                      </div>
                    </a>
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

export default CreateSavings;
