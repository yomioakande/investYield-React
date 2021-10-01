import React from 'react'

const PayBank = ({details,setActive}) => {
    return (
        <>
        <div className="col-lg-6 flex-column flex-grow-1">
          <div className="au-card h-100">
            <div className="au-card-inner">
              <h4 className="text-blue">Pay with bank transfer</h4>
              <div className="small-red-line"></div>

              <div className="mt-50">
                <div className="payment-selection">
                  <div className="bank-details">
                    <p>Account Name:</p>
                    <h4>{details.accountName}</h4>
                  </div>
                  <div className="bank-details">
                    <p>Account Number:</p>
                    <h3>{details.accountNo}</h3>
                  </div>
                  <div className="bank-details">
                    <p>Bank:</p>
                    <h4>{details.bank}</h4>
                  </div>
                  <div className="row mt-50 align-items-center justify-content-end">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-6">
                          <button
                            className="btn btn-cancel text-danger"
                            onClick={() => setActive(1)}
                          >
                            Previous
                          </button>
                        </div>
                        <div className="col-lg-6">
                          <button className="btn login-submit">NEXT</button>
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
    )
}

export default PayBank
