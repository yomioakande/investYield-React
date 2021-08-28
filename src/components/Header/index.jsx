import React from "react";
// import "../../index.css";
import "../../assets/css/style.css"
import logo from "../../assets/images/logo.svg"
const index = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light nav-edit px-5 py-3 shadow">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default index;
