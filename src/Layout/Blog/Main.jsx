import React from 'react'
import blog from "../../assets/images/img-blog-wide.png";
import justDot from "../../assets/images/justDot.svg"

import red from "../../assets/images/red-like.svg"
import blueShare from "../../assets/images/blue-share.svg"
import blogImg from "../../assets/images/BlogImg.png"
import search from "../../assets/images/search-icon2.svg"


import loveIcon from "../../assets/images/loveIcon.svg"
import shareIcon from "../../assets/images/shareIcon.svg"

const Main = () => {
    return (
        <>
      
          <div class="section__content section__content--p30 pb-4">
            <div class="container-fluid">
              <div class="row justify-content-between">
                <div class="col-lg-3">
                  <h5 class="get-started-header">Blogs</h5>
                  <div class="small-red-line"></div>
                  <p class="text-blue mt-3">Blog</p>
                </div>
                <div class="col-lg-4">
                  <div class="form-group position-relative">
                    <input
                      type="text"
                      class="search-field"
                      placeholder="Search..."
                    />
                    <img
                      src={search}
                      class="img-fluid position-absolute"
                      alt="Search"
                      style={{left: "5%" ,top: "33%"}}
                    />
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-12">
                  <img
                    src={blog}
                    class="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-lg-12">
                  <div class="au-card h-100">
                    <div class="au-card-inner">
                      <h5 class="text-dark">
                        Wall Street Week Ahead: Stock investors cast wary eye on
                        yield rally
                      </h5>
                      <div class="row mt-3">
                        <div class="col-xl-2 col-lg-4">
                          <div class="d-flex justify-content-between">
                            <p class="font-sm">Investopedia</p>
                            <img
                              src={justDot}
                              class="img-fluid"
                              alt="dot"
                            />
                            <p class="font-sm">9 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <p class="font-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec ut sapien vel lorem vehicula tempor id id
                          dui. Phasellus dolor turpis, lacinia nec mollis id,
                          fringilla eu nisi. Interdum et malesuada fames ac ante
                          ipsum primis in faucibus. Donec in iaculis nisl.
                          Integer vulputate suscipit orci, et tincidunt erat
                          rutrum vel. Nullam convallis ligula vel purus
                          ullamcorper posuere. Fusce auctor, nisl nec malesuada
                          viverra, tortor urna maximus nunc, eu pretium lacus
                          dolor eget nulla. Phasellus rhoncus ante at dictum
                          porta. Proin tellus turpis, semper et consectetur ut,
                          posuere eu velit. Ut id faucibus augue. Donec ornare
                          non risus ultrices facilisis. Curabitur quis arcu nec
                          libero faucibus imperdiet et ac justo. Ut aliquam
                          velit ut justo viverra, nec luctus leo viverra.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia curae; Nulla varius nibh
                          vitae elit malesuada viverra. Vivamus auctor nibh ac
                          luctus cursus. <br /><br />

                          Ut nec volutpat ipsum. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos. Sed metus lacus, mattis vitae porttitor
                          non, varius ut tellus. Maecenas et porta ipsum,
                          euismod pretium dolor. Quisque venenatis, erat eget
                          feugiat varius, massa risus lacinia metus, non
                          fermentum lorem tellus vel lorem. Donec vitae massa
                          accumsan, pretium ligula quis, aliquam augue. Fusce
                          risus turpis, volutpat sit amet nisi in, dictum varius
                          risus. Curabitur vel sem eget tortor condimentum
                          tincidunt ut at ipsum. Suspendisse congue a mauris
                          vitae tempor. Quisque et ipsum vestibulum, rhoncus
                          lectus nec, congue nunc. Sed id nibh nisi. Duis dictum
                          dui libero, eget aliquet eros aliquam in. Nunc sit
                          amet dui in enim aliquet auctor. Fusce lobortis
                          tincidunt massa, eu pulvinar dolor facilisis eget.
                        </p>
                      </div>
                      <div class="row mt-3">
                        <div class="col-xl-2 col-lg-4">
                          <div class="d-flex justify-content-between">
                            <a href="#">
                              <img src={red} alt="" />
                            </a>
                            <a href="#">
                              <img
                                src={blueShare}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <h5 class="text-dark">You may also like</h5>
                <div class="row mt-4">
                  <a
                    class="
                      col-xl-4 col-lg-4 col-md-6 col-12
                      d-flex
                      flex-column
                      mb-4
                      page-item
                    "
                  >
                    <div class="shadow d-flex flex-column">
                      <div>
                        <img
                          src={blogImg}
                          class="img-fluid w-100"
                          alt="Team member pic"
                        />
                      </div>
                      <div class="p-4 bg-white detail-div">
                        <div class="">
                          <h5>
                            Wall Street Week Ahead: Stock investors cast wary
                            eye on yield rally
                          </h5>
                          <p class="mt-3 font-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris ut lorem quis nibh...
                          </p>
                          <div
                            class="
                              row
                              mt-3
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div class="col-lg-8 col-xl-7">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <p class="font-sm">Investopedia</p>
                                <img
                                  src={justDot}
                                  class="img-fluid"
                                  alt="dot"
                                />
                                <p class="font-sm">9 days ago</p>
                              </div>
                            </div>
                            <div class="col-lg-3">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <img
                                  src={loveIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  src={shareIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    class="
                      col-xl-4 col-lg-4 col-md-6 col-12
                      d-flex
                      flex-column
                      mb-4
                    "
                  >
                    <div class="shadow d-flex flex-column">
                      <div>
                        <img
                          src={blogImg}
                          class="img-fluid w-100"
                          alt="Team member pic"
                        />
                      </div>
                      <div class="p-4 bg-white detail-div">
                        <div class="">
                          <h5>
                            Wall Street Week Ahead: Stock investors cast wary
                            eye on yield rally
                          </h5>
                          <p class="mt-3 font-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris ut lorem quis nibh...
                          </p>
                          <div
                            class="
                              row
                              mt-3
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div class="col-lg-8 col-xl-7">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <p class="font-sm">Investopedia</p>
                                <img
                                  src={justDot}
                                  class="img-fluid"
                                  alt="dot"
                                />
                                <p class="font-sm">9 days ago</p>
                              </div>
                            </div>
                            <div class="col-lg-3">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <img
                                  src={loveIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  src={shareIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    class="
                      col-xl-4 col-lg-4 col-md-6 col-12
                      d-flex
                      flex-column
                      mb-4
                    "
                  >
                    <div class="shadow d-flex flex-column">
                      <div>
                        <img
                          src={blogImg}
                          class="img-fluid w-100"
                          alt="Team member pic"
                        />
                      </div>
                      <div class="p-4 bg-white detail-div">
                        <div class="">
                          <h5>
                            Wall Street Week Ahead: Stock investors cast wary
                            eye on yield rally
                          </h5>
                          <p class="mt-3 font-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris ut lorem quis nibh...
                          </p>
                          <div
                            class="
                              row
                              mt-3
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div class="col-lg-8 col-xl-7">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <p class="font-sm">Investopedia</p>
                                <img
                                  src={justDot}
                                  class="img-fluid"
                                  alt="dot"
                                />
                                <p class="font-sm">9 days ago</p>
                              </div>
                            </div>
                            <div class="col-lg-3">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                "
                              >
                                <img
                                  src={loveIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  src={shareIcon}
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
     
        </>
    )
}

export default Main
