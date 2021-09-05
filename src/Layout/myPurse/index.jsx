import React from "react";

const Index = () => {
  return (
    <div className="main-content">
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header">Savings</h5>
              <div className="small-red-line"></div>
              <p className="text-blue mt-3">Savings / myPurse</p>
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
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-create-savings-ind flex-grow-1 px-3">
                        <img
                          src="./assets/images/coin-stack.svg"
                          className="img-fluid"
                          alt="Coin stack"
                        />
                        <p className="text-create-stash">Create Custom Purse</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column flex-grow-1 mb-4">
                      <div className="au-card-smaller au-card-bg-retirement h-100 px-3">
                        <img
                          src="./assets/images/familyIcon.svg"
                          alt="Food Tray"
                        />
                        <p className="text-green">Family</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-homeplan flex-grow-1 px-3">
                        <img src="./assets/images/TGIFIcon.svg" alt="TGIF" />
                        <p className="text-blue">TGIF</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-emergency flex-grow-1 px-3">
                        <img
                          src="./assets/images/dinnerDateIcon.svg"
                          alt="Dinner Date"
                        />
                        <p className="text-stash">Dinner date</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-movie flex-grow-1 px-3">
                        <img src="./assets/images/movies1.svg" alt="Shopping" />
                        <p className="text-movie">Movies</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-wedding flex-grow-1 px-3">
                        <img
                          src="./assets/images/shoppingIcon.svg"
                          alt="Family"
                        />
                        <p className="text-movie">Shopping</p>
                      </div>
                    </a>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-family flex-grow-1 px-3">
                        <img
                          src="./assets/images/entertainmentIcon.svg"
                          alt="Celebration"
                        />
                        <p className="text-stash3">Entertaiment</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
