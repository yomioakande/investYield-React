import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import Loader from "../../common/Loader";
import Modal2 from "./Modal2";
const PublicGroup = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setloading] = useState(false);
  const [modalInOpen, setModalInOpen] = useState([]);

  const modalToggle = (id) => {
    let open = modalInOpen.slice();
    open[id] = !open[id];
    setModalInOpen([...open]);
  };

  const close = (id) => {
    let open = modalInOpen.slice();
    open[id] = false;
    setModalInOpen([...open]);
  };

  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const data = await props
        .getInfo("/api/v1/user/public_group_savings")
        .then();
      setAccounts(data);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const currencyVal = (stash, number) =>
    new Intl.NumberFormat(stash?.currency?.code === 1 ? "en-NG" : "en-US", {
      style: "currency",
      currency: stash?.currency?.code === 1 ? "NGN" : "USD",
    }).format(number);

  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header">Join a challenge</h5>
              <div className="small-red-line"></div>
              <p className="text-blue mt-3">Group Savings</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="row mt-4">
                    {accounts.length > 0 ? (
                      accounts.map((single, index) => {
                        return (
                          <button
                            onClick={() => modalToggle(single.id)}
                            key={single?.id}
                            className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column flex-grow-1 mb-4"
                          >
                            <div className="au-card-smaller au-card-bg-retirement h-100 px-3">
                              {single?.imageUrl && (
                                <img
                                  src={single?.imageUrl}
                                  alt={single?.name}
                                />
                              )}

                              <p className="text-blue">{single?.name}</p>

                              <p>
                                {currencyVal(single, single?.target)}/{" "}
                                {single?.frequency}
                              </p>
                            </div>
                            {modalInOpen[single.id] && (
                              <Modal2 data={single} close={close} />
                            )}
                          </button>
                        );
                      })
                    ) : (
                      <p>No Accounts</p>
                    )}
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

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading } = state.registration;
  return { alert, username, loading };
};

const actionCreators = {
  getInfo: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(PublicGroup);

// export default ;
