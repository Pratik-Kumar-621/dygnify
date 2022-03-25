import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Loan = () => {
  const data = useSelector((state) => state);
  useEffect(() => {
    console.log("InitData", data);
  }, [data]);
  return (
    <div className="loan-list">
      {data?.loan?.map?.((loan) => {
        // loan = loan.data;
        return (
          <div className="indiv-loan" key={loan._id}>
            <div className="name-line">
              <div className="first-name">{loan.fname}</div>&nbsp;
              <div className="last-name">{loan.lname}</div>
            </div>
            <div className="age">
              <b>Age: </b>
              {loan.age}
            </div>
            <div className="mobile-no">
              <b>Mobile: </b>
              {loan.mobileNo}
            </div>
            <div className="business-name">
              <b>Business: </b>
              {loan.businessName}
            </div>
            <div className="gst-number">
              <b>Gst Number: </b>
              {loan.gstNumber}
            </div>
            <div className="address">
              <b>Address: </b>
              {loan.address}
            </div>
            <div className="loan-amount">
              <b>Loan Amount: </b>
              {loan.loanAmount}
            </div>
            <div className="intrest-rate">
              <b>Intrest Rate: </b>
              {loan.intrestRate}
            </div>
            <div className="loan-tenure">
              <b>Loan Tenure: </b>
              {loan.loanTenure}
            </div>
          </div>
        );
      })}
    </div>
  );
};
