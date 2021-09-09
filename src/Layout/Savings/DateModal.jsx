import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import modalclose from "../../assets/images/modal-close.svg";
import styled from "styled-components";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

const DateModal = ({ getFrequency, close, ccy }) => {
  const [freqOptions, setFreqOptions] = useState([]);
const [loading,setloading]=useState(false);
  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const datas = await getFrequency(
        "/api/v1/util/productinterest",
        "0103",
        1
      ).then();

      const { interest } = datas;
      setFreqOptions(interest);
      setloading(false)
    })();
    //eslint-disable-next-line
  }, []);

  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <>
          {loading && <Loader />}
          <div
            className=""
            tabindex="-1"
            role="dialog"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  onClick={() => close()}
                  className="d-flex modal-close-link"
                  data-dismiss="modal"
                >
                  <span className="px-2">close</span>
                  <img src={modalclose} className="img-fluid" alt="close" />
                </button>
                <div className="modal-body p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="text-blue">Choose target Date</h3>
                      <div className="small-red-line mt-3"></div>
                      <Style1>
                        <p className="title">
                          How long do you want to save your money for?
                        </p>
                        <div className="flex">
                          {freqOptions.map((single, index) => {
                            return (
                              <div key={index} className="flex1">
                                <p className="circle"></p>
                                <p className="days">{single.tenor.name} </p>
                                <p className="annum">
                                  {single.rate}% per annum
                                </p>
                              </div>
                            );
                          })}
                         
                        </div>
                      </Style1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ToastContainer autoClose={1000} hideProgressBar /> */}
        </>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  // bvnReg: usersActions.bvnReg,
  getFrequency: usersActions.getFrequency,
};

export default connect(mapStateToProps, actionCreators)(DateModal);

// export default DateModal;

export const OVERLAY = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(2px);
  background: #003079;
  opacity: 0.96;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalBox = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  background: #003079;
  position: fixed;
  z-index: 5000;
  opacity: 1;

  .none {
    display: none !important;
  }
`;

const Style1 = styled.div`
  .flex1 {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #dddddd;
    padding: 0.2rem;
    border-radius: 10px;
  }

  .title {
    margin-top: 1rem;
  }

  .circle {
    border: 1px solid #000;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .days {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1rem;
    color: #263238;
  }

  .annum {
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 1rem;
    color: #08b29b;
  }
`;
