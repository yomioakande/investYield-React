import React,{useState,useEffect} from "react";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import * as Yup from "yup";
import Loader from "../common/Loader";

const FundPurse2 = (props) => {
  const [num, setNum] = useState("");
const[loading,setloading]=useState(false)
  const getFundDetails = JSON.parse(sessionStorage.getItem("fundpurse"));

  const initialValues = {
    accountNumber: getFundDetails.accountName,
    amount: "",
  };

  const validationSchema = Yup.object({
    amount: Yup.string().required("Enter an Amount"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setloading(true);
    const obj = {
      accountNumber: getFundDetails.accountId,
      amount: formik.values.amount,
    };
 
    props.fundPurse(
        obj,
        "/api/v1transfer/FundExistingPurse",
        "/app/savings/fundpursebreakdown"
      );
    
    // sessionStorage.setItem("savingsInfo", JSON.stringify(obj));
    // window.location.href = `/app/savings/create3/${useLink}`;
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    formik.setFieldValue("amount", num?.value);
    // eslint-disable-next-line
  }, [num?.value]);

 
  return (
    <>
    {loading && <Loader />}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Fund Purse</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        <h5 className="text-blue weight-500">Purse Name</h5>
                        <input
                          type="text"
                          className="text-field mt-2"
                          //   value={}
                          name={"accountNumber"}
                          {...formik.getFieldProps("accountNumber")}
                          disabled
                        />
                      </div>
                      <div className="form-group mt-4">
                        <h5 className="text-blue weight-500">Amount</h5>

                        <NumberFormat
                          isNumericString={true}
                          thousandSeparator={true}
                          className="text-field"
                          name="amount"
                          onValueChange={(values) => {
                            setNum({ value: values.value });
                          }}
                          onChange={formik.handleChange}
                          {...formik.getFieldProps("amount")}
                          placeholder="Enter Amount"
                        />

                        {/* <input
                          type="number"
                          className="text-field mt-2"
                          //   value="50,000"
                          name="amount"
                          {...formik.getFieldProps("amount")}
                        /> */}
                      </div>
                      <div
                        className="
                              row
                              mt-4
                              align-items-center
                              justify-content-end
                            "
                      >
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                              <button className="btn login-submit">NEXT</button>
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

const mapStateToProps = (state) => {
    const { alert } = state;
    const username = state.authentication.user;
    const { loading } = state.registration;
    return { alert, username, loading };
  };
  
  const actionCreators = {
      fundPurse:usersActions.createStash
    // getData: usersActions.getInfo,
    // addCard: usersActions.addCard,
    // getAccounts: usersActions.getAccounts,
    // getPaginateTransact: usersActions.getPaginateTransact,
  };
  
  export default connect(mapStateToProps, actionCreators)(FundPurse2);
  


// export default ;
