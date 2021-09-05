import React from "react";
import styled from "styled-components";
import Select from "react-select";
// import callIcon from "../../assets/images/callIconBlue.svg";
// import mailIcon from "../../assets/images/mailIconBlue.svg";
// import locationBlue from "../../assets/images/locationIconBlue.svg";
// import FAQ from "../../assets/images/FAQIcon.svg";
// import termIcon from "../../assets/images/termsIcon.svg";

const Profile = () => {
  const options = [
    { value: "date", label: "Date Posted" },
    { value: "views", label: "No. of Views" },
    { value: "shares", label: "No. of Shares" },
  ];

  const customStyles = {
      
    option: (provided, state) => ({
      ...provided,
      width: "100%",
    //   height: "140%",
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
    }),

    control: (base, state) => ({
      ...base,
      height:'4rem',
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
    indicatorSeparator: state => ({
        display: 'none',
      }),
  };
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">Account</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">Account / Support</p>
                  </div>
                  <div className="col-lg-7 px-0 d-flex justify-content-end flex-wrap">
                    <div className="col-lg-5 mt-2">
                      <button className="btn btn-transfer">
                        Transfer Funds
                      </button>
                    </div>
                    <div className="col-lg-5 mt-2">
                      <button className="btn btn-withdraw">
                        Withdraw Funds
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProfileStyle>
            <div className="row mt-4 rounded">
              <div className="col-lg-12">
                <div className="au-card h-100">
                  <div className="d-flex flex-row">
                    <h2>My Profile</h2>
                    <h2>Next of Kin</h2>
                  </div>
                  <div className="profile-details">
                    <div className="name">
                      <p className="title1">Your Full Name</p>
                      <div className="input-bg">
                        <p className="input-title">First Name</p>
                        <input type="text" value="Raymond" />
                      </div>

                      <div className="input-bg">
                        <p className="input-title">Last Name</p>
                        <input type="text" value="Adewole" />
                      </div>
                    </div>

                    <div className="details">
                      <p className="title1">Contact Details</p>
                      <div className="input-bg">
                        <p className="input-title">Email Address</p>
                        <input type="text" value="raymond.adewale@gmail.com" />
                      </div>

                      <div className="input-bg">
                        <p className="input-title">Phone Number</p>
                        <input type="text" value="09055275774" />
                      </div>
                    </div>

                    <div className="others">
                      <p className="title1">
                        Date of birth and Residential details
                      </p>
                      <div className="input-bg">
                        <p className="input-title">
                          Date of birth (dd / mm / yyyy)
                        </p>
                        <input type="date" value="12 / 12 / 1988" />
                      </div>
                      <div className="selects">
                      <Select
                        options={options}
                        styles={customStyles}
                        isSearchable={false}
                        className="select-field input-bg"
                        //   placeholder={""}
                        //   // name="frequency"
                        //   value={defaultValue(
                        //     options,
                        //     formik.values.frequency
                        //   )}
                        //   onChange={(value) =>
                        //     formik.setFieldValue("frequency", value.value)
                        //   }
                        //   autoFocus={true}
                      />
                      </div>
                    </div>
                    <div className="input-textarea">
                      {/* <div>xx</div> */}
                      <div className="area-text">
                        <textarea placeholder="Residential Address" />
                      </div>
                    </div>

                    <div className="upload">
                      <p className="title1 ">
                        Upload a valid means of identification (international
                        passport, voters card, drivers license, NIN).
                      </p>
                      <div className="input-bg file-upload">
                        <p className="input-title">
                          {/* Date of birth (dd / mm / yyyy) */}
                        </p>
                        <input type="file" className="" />
                      </div>
                    </div>

                    <div className="upload">
                      <p className="title1">
                        Please enter your password for security purpose
                      </p>
                      <div className="input-bg input-password">
                        <input
                          type="text"
                          value=""
                          className="password"
                          placeholder={"Password"}
                        />
                      </div>
                    </div>

                    <div className="profile-btn">
                      <button className="">UPDATE PROFILE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProfileStyle>
        </div>
      </div>
    </>
  );
};

const ProfileStyle = styled.div`
  background-color: #fff;
  /* .rounded{
    border: 34px solid #fff;
    border-radius: 50px !important;
} */

  .profile-details {
    margin-top: 5rem;
  }
  .name,
  .details,
  .others,
  .upload {
    display: flex !important;
    justify-content: space-between;
    align-items: space-between;
    font-size: 1rem;
    margin: 1rem 0;
  }

  .name input,
  .details input,
  .others input {
    background: #f0f0f0;
    width: 100%;
    border-radius: 20px;
  }

  .input-bg {
    flex-basis: 35%;
    background: #f0f0f0;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    padding: 0.5rem;
  }

  .input-title {
    font-size: 0.8rem;
  }

  .title1 {
    flex-basis: 20%;
    color: #0553c8;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: bold;
  }


.select-field{
    padding:0;
    height: 100%;
    /* background:red !important; */
}

.selects{
    flex-basis: 35%;
    height: 100%;
}


  .input-textarea {
  }
  .area-text {
    float: right;
  }

  .area-text textarea {
    width: 730px;
    height: 100px;
    border: 1px solid #f0f0f0;
    border-radius: 0.5rem;
  }

  textarea::placeholder {
    padding: 1rem;
  }

  .upload {
    clear: both;
  }
  //file upload_alt

  .file-upload {
    flex-basis: 75%;
  }

  //password
  .password {
    width: 100%;
    height: 100%;
  }

  .input-password {
    flex-basis: 75%;
    padding: 0rem;
    border: 1px solid #f0f0f0;
  }

  .input-password input::placeholder {
    padding-left: 1rem;
  }

  .profile-btn {
    float: right;
    width: 75%;
    background: #08b29b;
    border-radius: 5px;
    /* margin: 0 auto; */
    text-align: center;
    padding: 0.5rem;

    font-family: Comfortaa;

    button {
      color: #fff;
    }
  }
`;

export default Profile;
