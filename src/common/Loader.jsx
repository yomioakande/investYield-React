import React from "react";
// import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex:"9999"
        }}
      >
        <ClipLoader color={"#12bc29"} size={150} />
      </div>
    </>
  );
};

export default Loader;
