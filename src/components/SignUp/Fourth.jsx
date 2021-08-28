import React from 'react'
import leftArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css"
const fourth = () => {
    return (
        <main>
        <section class="bg-light-blue reg-section-pin">
            <div class="container-fluid px-0">
                <div class="d-flex justify-content-center">
                    <div class="col-lg-4">
                        <div class="bg-white login-div p-5 shadow my-80">
                            <div class="d-flex justify-content-between">
                                <a href="/auth/signup3" class="d-flex no-decor align-items-center"><img src={leftArrow} class="img-fluid" alt="left-arrow"/><span class="px-2 text-dark">Back</span></a>
                                <h5 class="login-div-header">Get Started</h5>
                                <h5 class="step-text">4/4</h5>
                            </div>
                            <div class="mt-4">
                                <h6 class="reg-p mb-3">Create a 4-digit PIN for transactions on investYield.</h6>
                                <form action="">
                                    <div class="form-group mt-3">
                                        <input type="password" class="text-field" placeholder="Create Pin" maxlength="4"/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="password" class="text-field" placeholder="Confirm Pin" maxlength="4"/>
                                    </div>
                                    <div class="form-group mt-5">
                                        <input type="submit" class="btn login-submit" value="NEXT"/>
                                    </div>
                                    <div class="d-flex justify-content-center mt-4">
                                        <a href="/" class="text-green">I'll do this later</a>
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

export default fourth
