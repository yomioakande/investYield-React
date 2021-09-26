import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/images/search-icon2.svg";
import "../../assets/css/style.css";
import BlogImg from "../../assets/images/BlogImg.png";
import justDot from "../../assets/images/justDot.svg";
import love from "../../assets/images/loveIcon.svg";
import share from "../../assets/images/shareIcon.svg";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
const Index = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async function dataInfo() {
      const data = await props.getBlogs("/api/v1/util/blogposts").then();
      setBlogs(data);
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <h5 className="get-started-header">Blogs</h5>
              <div className="small-red-line"></div>
              <p className="text-blue mt-3">Blog</p>
            </div>
            <div className="col-lg-4">
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="search-field"
                  placeholder="Search..."
                />
                <img
                  src={search}
                  className="img-fluid position-absolute"
                  alt="Search"
                  style={{ left: "5%", top: "33" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {blogs && blogs.length > 0 ? (
              blogs.map((single, index) => {
                return (
                  <>
                    {" "}
                    <Link
                      key={index}
                      to="/app/blog/:id"
                      className="col-xl-4 col-lg-4 col-md-6 col-1 d-flex flex-column mb-4 page-item "
                    >
                      <div className="shadow d-flex flex-column">
                        <div>
                          <img
                            src={BlogImg}
                            className="img-fluid w-100"
                            alt="Team member pic"
                          />
                        </div>
                        <div className="p-4 bg-white detail-div">
                          <div className="">
                            <h5>
                              Wall Street Week Ahead: Stock investors cast wary
                              eye on yield rally
                            </h5>
                            <p className="mt-3 font-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris ut lorem quis nibh...
                            </p>
                            <div className=" row  mt-3 align-items-center justify-content-between ">
                              <div className="col-lg-8 col-xl-7">
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="font-sm">Investopedia</p>
                                  <img
                                    src={justDot}
                                    className="img-fluid"
                                    alt="dot"
                                  />
                                  <p className="font-sm">9 days ago</p>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className=" d-flex justify-content-between align-items-center">
                                  <img
                                    src={love}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <img
                                    src={share}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })
            ) : (
              <p>No Blogs created</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading } = state.registration;
  return { alert, username, loading };
};

const actionCreators = {
  getBlogs: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Index);
