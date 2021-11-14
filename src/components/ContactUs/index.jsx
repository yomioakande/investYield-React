import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callIcon from "../../assets/images/callIcon.svg";
import mailIcon from "../../assets/images/mailIcon.svg";
import locationIcon from "../../assets/images/locationIcon.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import IGIcon from "../../assets/images/IGIcon.svg";
import twitterIcon from "../../assets/images/twitterIcon.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
// import { Linkedin } from "react-feather";
// import {}
const Index = () => {
  const success = () => {
    toast.success("Submitted Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // const [state, setState] = useState(initialValues);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    message: Yup.string()
      .min(2, "Message is too short")
      .required("A Message is Required"),
  });

  const apiUrl = "";
  const handleSubmit = async (reqBody) => {
    try {
      let res = await axios({
        method: "POST",
        url: apiUrl,
        data: reqBody,
      });
      let data = res.data;
      success();
      return data;
    } catch (error) {
     
      return error.response;
    }
  };

  const onSubmit = (values, onSubmitProps) => {
    handleSubmit(values);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmiting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <main>
      <section className="">
        <div className="container p-resp">
          <div className="row position-relative">
            <div className="col-lg-8 mt-5">
              <div className="bg-blue p-5 div-contact-us">
                <div className="my-4 col-lg-10 px-0">
                  <div className="">
                    <h5 className="getInTouch-header text-light">
                      Get in touch
                    </h5>
                    <p className="getInTouch-p text-light mt-5">
                      Fill up the form and our team will get back to you within
                      24 hours.
                    </p>
                  </div>
                  <div className="mt-5">
                    <div className="row align-items-center">
                      <div className="col-xl-1 col-lg-2">
                        <img src={callIcon} alt="Call" />
                      </div>
                      <div className="col-xl-11 col-lg-10 welcome-p link-text text-light">
                        <a href="tel:+2348180248941">+234 818 024 8941</a>
                      </div>
                    </div>
                    <div className="row align-items-center mt-5">
                      <div className="col-xl-1 col-lg-2">
                        <img src={mailIcon} alt="Mail" />
                      </div>
                      <div className="col-xl-11 col-lg-10 welcome-p link-text text-light">
                        <a href="mailto:support@investyield.ng">
                          support@investyield.ng
                        </a>
                      </div>
                    </div>
                    <div className="row align-items-center mt-5">
                      <div className="col-lg-2 col-xl-1">
                        <img src={locationIcon} alt="Location" />
                      </div>
                      <div className="col-lg-10 col-xl-11 welcome-p text-light">
                        No 1, Dr Adewale Oshin, Off Prince Bode Adewole, Off
                        Fola Oshibo, Lekki phase 1, Lagos State.
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-5 px-0 mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        href="https://www.facebook.com/investYieldofficial"
                        target="_BLANK"
                        rel="noreferrer"
                      >
                        <img
                          src={facebookIcon}
                          className="img-fluid"
                          alt="Facebook"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/investyield"
                        target="_BLANK"
                        rel="noreferrer"
                      >
                        <img
                          src={IGIcon}
                          className="img-fluid"
                          alt="Instagram"
                        />
                      </a>
                      <a
                        href="https://twitter.com/InvestYield"
                        rel="noreferrer"
                        target="_BLANK"
                      >
                        <img
                          src={twitterIcon}
                          className="img-fluid"
                          alt="Twitter"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/investyieldng"
                        target="_BLANK"
                        rel="noreferrer"
                      >
                        <img
                          src={linkedinIcon}
                          className="img-fluid"
                          alt="Linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 position-absolute contactUsForm-resp">
              <div className="bg-white shadow p-4 div-contact-us">
                <div className="mt-4">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-field"
                        name="name"
                        {...formik.getFieldProps("name")}
                        placeholder="Your Name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="text-field"
                        name="email"
                        {...formik.getFieldProps("email")}
                        placeholder="Email Address"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="p-3"
                        id="textArea-ContactUs"
                        name="message"
                        {...formik.getFieldProps("message")}
                        placeholder="Message"
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <p className="font-sm text-danger error1 font-weight-bold">
                          {formik.errors.message}
                        </p>
                      )}
                    </div>

                    <div className="form-group mt-5">
                      <input
                        type="submit"
                        className="btn login-submit"
                        value="SEND"
                      />
                      <ToastContainer autoClose={1000} hideProgressBar />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
