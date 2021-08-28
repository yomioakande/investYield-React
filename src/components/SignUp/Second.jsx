import React from 'react';
import {Link} from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css"
const Second = () => {
    return (
        <main>
    <section className="bg-light-blue reg-section">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-xl-4">
                    <div className="bg-white login-div p-5 shadow mt-5">
                        <div className="d-flex justify-content-between">
                            <Link to="/auth/signup1" className="d-flex no-decor align-items-center"><img src={leftArrow} className="img-fluid" alt="left-arrow"/><span className="px-2 text-dark">Back</span></Link>
                            <h5 className="login-div-header">Get Started</h5>
                            <h5 className="step-text">2/4</h5>
                        </div>
                        <div className="mt-5">
                            <h6 className="reg-p mb-3">Please enter the One-Time Password (OTP) that has been sent to the phone number<span className="reg-p-number"> +234705*****95. </span></h6>
                            <form action="">
                                <div className="form-group mt-4">
                                    <input type="text" className="text-field" placeholder="Enter OTP"/>
                                </div>
                                <div className="form-group mt-50">
                                    <input type="submit" className="btn login-submit" value="NEXT"/>
                                </div>
                                <div className="mt-4">
                                    <h6 className="reg-p text-center">Did not get an OTP?</h6>
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn-resend-otp">Resend OTP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
    )
}

export default Second
