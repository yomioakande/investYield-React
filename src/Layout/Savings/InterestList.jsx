import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

const InterestList = ({ getFrequency, close, ccy }) => {
  const [freqOptions, setFreqOptions] = useState([]);
  // eslint-disable-next-line
  const [loading, setloading] = useState(false);
  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const datas = await getFrequency(
        "/api/v1/util/productinterest",
        "0201",
        1
      ).then();
      const { interest } = datas;
      console.log(interest)
      setFreqOptions(interest);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Style>
        {/* col-lg-6 */}
        <div className="" style={{ width: "100%" }}>
          <div className="au-card h-100">
            <div className="au-card-inner">
              <h4 className="text-blue">Interest Rate Guide</h4>
              <div className="small-red-line"></div>
              <p className="mt-4">Know your interest rate by tenor</p>
              <div className="mt-30">
                {freqOptions.map((single, index) => {
                  return (
                    <div className="tdate">
                      {single.tenor.name}{" "}
                      <span>at {single.rate}% per annum</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Style>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  getFrequency: usersActions.getFrequency,
};

export default connect(mapStateToProps, actionCreators)(InterestList);

const Style = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;
