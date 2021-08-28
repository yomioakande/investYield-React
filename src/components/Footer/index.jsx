import React from "react";
import "../../assets/css/style.css"
// import "../../index.css";
const index = () => {
  return (
    <footer>
      <div class="container-fluid p-4">
        <div class="d-flex justify-content-center align-items-center">
          <div class="px-5 px-resp">
            <p class="loginpage-footer-p mb-0">
              2020 investYield. All Rights Reserved
            </p>
          </div>
          <div class="px-5 px-resp">
            <a href="/" class="loginpage-footer-p">
              Terms and Conditions
            </a>
          </div>
          <div class="px-5 px-resp">
            <a href="/" class="loginpage-footer-p">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
