import React from "react";

const MyPorfolio = () => {
  return (
    <>
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
                <button className="btn btn-transfer">Transfer Funds</button>
              </div>
              <div className="mt-2 flex-grow-1 w-auto">
                <button className="btn btn-withdraw">Withdraw Funds</button>
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
                          <td className="text-blue text-right">₦5,024.12</td>
                        </tr>
                        <tr>
                          <td>Naira savings</td>
                          <td className="text-blue text-right">₦5,024.12</td>
                        </tr>
                        <tr>
                          <td>Interest earned</td>
                          <td className="text-blue text-right">₦24.12</td>
                        </tr>
                        <tr>
                          <td>Dollar savings</td>
                          <td className="text-blue text-right">$0.00</td>
                        </tr>
                        <tr>
                          <td>Dollar interest earned</td>
                          <td className="text-blue text-right">$0.00</td>
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
                          <td className="text-blue text-right">₦5,024.12</td>
                        </tr>
                        <tr>
                          <td>Naira investments</td>
                          <td className="text-blue text-right">₦5,024.12</td>
                        </tr>
                        <tr>
                          <td>Dollar investments</td>
                          <td className="text-blue text-right">$0.00</td>
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
                            <td>Naira balance</td>
                            <td className="text-blue text-right">₦5,024.12</td>
                          </tr>
                          <tr>
                            <td>Dollar balance</td>
                            <td className="text-blue text-right">$0.00</td>
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

export default MyPorfolio;
