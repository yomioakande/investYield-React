import React from "react";
import percentageIcon from "../../assets/images/percentageIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const MyPurse3 = () => {
  const initialValues = {
    autoWithdraw: "",
    drFreq: "",
    DrDate: "",
    drPct: 0,
    DrDateOpt: '',
    //   isAutomated: "",
  };

  const validationSchema = Yup.object({
    autoWithdraw: Yup.string().required("A plan Name is Required"),
    drFreq: Yup.string().required("A plan Name is Required"),
    DrDate: Yup.string().required("A target amount is required"),
    drPct: Yup.string().required("Enter a Date"),
    amount: Yup.string().required("Enter a Date"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
    //   name: values.name,
    //   ccyCode: values.ccyCode,
    //   startDate: values.startDate,
    //   crFreq: values.crFreq,
    //   amount: values.amount,
    };
    console.log(obj);
    // localStorage.setItem("savingsInfo", JSON.stringify(obj));
    // window.location.href = "/app/savings/create3";
    // register(obj, "/api/v1/identity/register", "/auth/signup2");
    // onSubmitProps.resetForm();
    // onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Let’s get your Purse set up</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4">
                        <div className="">
                          <label className="text-blue weight-500">
                            Would you like to opt in for automatic withdrawal?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio1"
                                    type="radio"
                                    name="autoWithdraw"
                                    value={false}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio1">
                                    <span>Yes, I would</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio2"
                                    type="radio"
                                    name="autoWithdraw"
                                    value={false}
                                    onChange={formik.handleChange}
                                  />
                                  <label for="radio2">
                                    <span>No, I am not interested</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            How often would you like to withdraw?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio3"
                                    name="drFreq"
                                    value={false}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                  <label for="radio3">
                                    <span>Every week</span>
                                    {/* 7 */}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    //   14
                                    id="radio4"
                                    name="drFreq"
                                    value={false}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                  <label for="radio4">
                                    <span>Every two weeks</span>
                                  </label>
                                  {/* everymonth 30 */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio5"
                                    name=" drFreq"
                                    value={false}
                                    onChange={formik.handleChange}
                                    type="radio"
                                  />
                                 
                                  <label for="radio5">
                                    <span>Let me chooses a date</span>
                                  </label>
                                  {/* DrDate=choose a date */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            What percentage would you like to withdraw?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio3"
                                    name="radio-frequency"
                                    type="radio"
                                  />
                                  <label for="radio3">
                                    <span>20%</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio3"
                                    name="radio-frequency"
                                    type="radio"
                                  />
                                  <label for="radio3">
                                    <span>60%</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio3"
                                    name="radio-frequency"
                                    type="radio"
                                  />
                                  <label for="radio3">
                                    <span>100%(All at once)</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio3"
                                    name="radio-frequency"
                                    type="radio"
                                  />
                                  <label for="radio3">
                                    <span>Let me specify</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mt-4 position-relative">
                            <input
                              type="text"
                              className="text-field"
                              placeholder="Specify the percentage"
                            />
                            <div
                              className="position-absolute"
                              style={{ right: "5%", top: "20%" }}
                            >
                              <img
                                src={percentageIcon}
                                className="img-fluid"
                                alt="percent"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <button className="btn btn-previous text-green">
                                  PREVIOUS
                                </button>
                              </div>
                              <div className="col-lg-6">
                                <button className="btn login-submit">
                                  NEXT
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPurse3;
