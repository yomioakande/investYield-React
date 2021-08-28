import React from 'react'
// import "../../index.css";
import leftArrow from "../../assets/images/left-arrow.svg";
import check from "../../assets/images/check.svg"
import "../../assets/css/style.css"
const third = () => {
    return (
        <main>
    <section className="bg-light-blue reg-section">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5">
                    <div className="bg-white login-div p-5 shadow mt-5">
                        <div className="d-flex justify-content-between">
                            <a href="/auth/signup2" className="d-flex no-decor align-items-center"><img src={leftArrow} className="img-fluid" alt="left-arrow"/><span className="px-2 text-dark">Back</span></a>
                            <h5 className="login-div-header">Get Started</h5>
                            <h5 className="step-text">3/4</h5>
                        </div>
                        <div className="otp-verified px-4 py-3 mt-4 d-flex justify-content-between align-items-center">
                            <p className="mb-0 otp-verified-text">OTP successfully verified</p>
                            <img src={check} className="img-fluid" alt="Check"/>
                        </div>
                        <div className="mt-4">
                            <h6 className="reg-p mb-3">Create a password for signing in.</h6>
                            <form action="">
                                <div className="form-group mt-3">
                                    <input type="password" className="text-field" placeholder="Create Password"/>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="password" className="text-field" placeholder="Confirm Password"/>
                                </div>
                                <div className="mt-4">
                                    <p className="agree-text">By clicking on “Sign Up”,  you agree to investYield’s  <a href="/">Terms & Conditions</a> and <a href="/">Privacy Policy</a></p> 
                                </div>
                                <div className="form-group mt-5">
                                    <input type="submit" className="btn login-submit" value="NEXT"/>
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

export default third
