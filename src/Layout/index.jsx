import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
// import Main from "./Main";
import "../assets/css/theme.css";

const Index = (props) => {
  return (
    <body className="animsition">
      <div className="page-wrapper">
        <div className="page-container">
          <Header />
          <SideBar />
          <div className="main-content">{props.children}</div>
        </div>
      </div>
    </body>
  );
};

export default Index;
