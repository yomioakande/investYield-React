import React from "react";
import ReactDom from "react-dom";
import modalclose from "../../../assets/images/modal-close.svg";
import { OVERLAY, ModalBox } from "../ModalBeneficiary";
import Select from "react-select";

const SelectModal = ({ beneficiary, close, setSingle, single, loading }) => {

  const options = beneficiary.map((single, index) => {
    return {
      value: single.email,
      label: single.name,
    };
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px solid #DDE9FB",
      color: state.selectProps.menuColor,
      paddingTop: 14,
      paddingBottom: 14,
      hover: "#DDE9FB",
    }),

    menuList: (provided, state) => ({
      paddingTop: 0,
      paddingBottom: 0,
      background: "#fff",
      hover: "#DDE9FB",
      height: "10rem",
      overflowY: "scroll",
    }),

    placeholder: (provided, state) => ({
      margin: ".5rem",
      color: "#000",
    }),

    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };

  return ReactDom.createPortal(
    <OVERLAY>
      <ModalBox>
        <>
          {/* {loading && <Loader />} */}
          <div
            className=""
            tabindex="-1"
            role="dialog"
            data-backdrop="static"
            data-keyboard="false"
            // id="addBeneficiary"
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
                      <h3 className="text-blue">Select Beneficiary</h3>
                      <div className="small-red-line"></div>

                      <div
                        style={{ zIndex: 99999, marginTop: "2rem" }}
                        className="custom-select text-field p-0"
                      >
                        <Select
                          maxMenuHeight={5}
                          options={options}
                          styles={customStyles}
                          isSearchable={false}
                          className="select-field"
                          placeholder={
                            single.length === 0 ? "Select a Beneficary" : single
                          }
                          value={single}
                          onChange={(value) => setSingle(value.value)}
                          autoFocus={true}
                        />
                      </div>
                      <button
                        onClick={() => close()}
                        className="btn login-submit mt-5"
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </ModalBox>
    </OVERLAY>,
    document.getElementById("portal")
  );
};

export default SelectModal;
