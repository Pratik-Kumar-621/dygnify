import React, { useState } from "react";
import { Input } from "./Input";
import { Buttons } from "./Button";
import { useDispatch } from "react-redux";
import { postLoanData } from "../redux/actions/loan";
import { Heading } from "./Heading";

export const Form = () => {
  const [formView, setFormView] = useState("1");

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    age: "",
    mobileNo: "",
    businessName: "",
    gstNumber: "",
    address: "",
    loanAmount: "",
    intrestRate: "",
    loanTenure: "",
  });
  const clear = () => {
    setFormData({
      fname: "",
      lname: "",
      age: "",
      mobileNo: "",
      businessName: "",
      gstNumber: "",
      address: "",
      loanAmount: "",
      intrestRate: "",
      loanTenure: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLoanData(formData));
    setFormView("1");
    clear();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-body">
      <Heading heading="Add loan data" />
      <div className="form-switch">
        <div className="form-switch-btn">
          <div className={`progress success`}>1</div>
          <div
            className={`bar ${
              (formView === "2" || formView === "3") && "bar-success"
            }`}
          ></div>
          <div
            className={`progress ${
              (formView === "2" || formView === "3") && "success"
            }`}
          >
            2
          </div>
          <div className={`bar ${formView === "3" && "bar-success"}`}></div>
          <div className={`progress ${formView === "3" && "success"}`}>3</div>
        </div>
      </div>
      <form className="form-inputs">
        {formView === "1" && (
          <>
            <form>
              <Input
                label="First Name"
                name="fname"
                type="text"
                value={formData.fname}
                placeholder="Eg. Pratik"
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                name="lname"
                type="text"
                value={formData.lname}
                placeholder="Eg. Kumar"
                onChange={handleChange}
              />
              <Input
                label="Age (in years)"
                name="age"
                type="text"
                value={formData.age}
                placeholder="Eg. 21"
                onChange={handleChange}
              />
              <Input
                label="Mobile Number (10 digits)"
                name="mobileNo"
                type="number"
                min={1000000000}
                max={9999999999}
                value={formData.mobileNo}
                placeholder="Eg. xxxxxxxxxx"
                onChange={handleChange}
              />
              <Buttons
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  formData.fname &&
                    formData.lname &&
                    formData.age &&
                    formData.mobileNo &&
                    formData.mobileNo > 1000000000 &&
                    formData.mobileNo < 9999999999 &&
                    setFormView("2");
                }}
                text="Next"
              />
            </form>
          </>
        )}
        {formView === "2" && (
          <>
            <form>
              <Input
                label="Business Name"
                name="businessName"
                type="text"
                value={formData.businessName}
                placeholder="Eg. Dygnify"
                onChange={handleChange}
              />
              <Input
                label="GST Number"
                name="gstNumber"
                type="number"
                value={formData.gstNumber}
                placeholder="Eg. xxxxxxx"
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="address"
                type="text"
                value={formData.address}
                placeholder="Eg. abc road, xyz city"
                onChange={handleChange}
              />
              <Buttons
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  formData.businessName &&
                    formData.gstNumber &&
                    formData.address &&
                    setFormView("3");
                }}
                text="Next"
              />
              <Buttons
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setFormView("1");
                }}
                text="Back"
              />
            </form>
          </>
        )}
        {formView === "3" && (
          <>
            <form>
              <Input
                label="Loan Amount (in Rs.)"
                name="loanAmount"
                type="number"
                value={formData.loanAmount}
                placeholder="Eg. 50000"
                onChange={handleChange}
              />
              <Input
                label="Intrest Rate (in %)"
                name="intrestRate"
                type="number"
                min={0}
                max={100}
                value={formData.intrestRate}
                placeholder="Eg. 55"
                onChange={handleChange}
              />
              <Input
                label="Loan Tenure (in years)"
                name="loanTenure"
                type="number"
                value={formData.loanTenure}
                placeholder="Eg. 2"
                onChange={handleChange}
              />
              <Buttons
                type="submit"
                variant="contained"
                color="primary"
                onClick={
                  FormData.loanAmount &&
                  FormData.loanTenure &&
                  formData.intrestRate &&
                  handleSubmit
                }
                text="Submit"
              />
              <Buttons
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setFormView("2");
                }}
                text="Back"
              />
            </form>
          </>
        )}
      </form>
    </div>
  );
};
