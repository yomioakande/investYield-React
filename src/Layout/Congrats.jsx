import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import congratsPic from "../assets/images/background.svg";
import stars from "../assets/images/star.svg";
const Congrats = ({ headline1, headline2, content }) => {
  return ReactDom.createPortal(
    <>
      <CongratsBox>
        <div className="main-flex">
          <div className="main-img">
            <img src={stars} alt="" />
          </div>

          <div className="main-contents">
            <h2 className="congrats-title">{headline1}</h2>
            <p className="signup">{headline2}</p>

            <p className="welcome">{content||null} </p>

            <div className="main-btn">
              <a href="/app">GO TO DASHBOARD</a>
            </div>
          </div>
        </div>
      </CongratsBox>
    </>,
    document.getElementById("portal")
  );
};

const CongratsBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background: linear-gradient(rgba(5, 8, 200, 0.9), rgba(5, 8, 200, 0.3)),
    url(${congratsPic});

  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .main-img {
    width: 250px;
    margin: 0 auto;
    padding: 6rem 0;
    padding-bottom: 2rem;
  }

  .main-img img {
    width: 100%;
    height: 100%;
  }
  .main-contents {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .congrats-title {
    font-size: 3rem;
    text-align: center;
    font-family: Comfortaa;
    color: #ffffff;
  }

  .signup {
    font-size: 16px;
    text-align: center;
    color: #ffffff;
  }

  .welcome {
    font-size: 1rem;
    text-align: center;
    width: 30%;
    margin: 1rem auto;
    color: #ffffff;
  }

  .main-btn {
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 1.5rem;
    background: #08b29b;
    border-radius: 5px;
    text-align: center;

    a {
      color: #fff;
      width: 100%;
      font-size: 1rem;
      padding: 1rem 6rem;
      font-family: Comfortaa;
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.04em;
    }
  }
`;

export default Congrats;
