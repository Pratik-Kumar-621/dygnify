import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Enter the first name"],
  },
  lname: {
    type: String,
    required: [true, "Enter the last name"],
  },
  age: {
    type: String,
    required: [true, "Enter your age"],
    match: /^[0-9]+$/,
  },
  mobileNo: {
    type: String,
    required: [true, "Enter the last name"],
    minlength: 10,
    maxlength: 10,
    match: /^[0-9]+$/,
  },
  businessName: {
    type: String,
    required: [true, "Enter your business name"],
  },

  gstNumber: {
    type: String,
    required: [true, "Enter the GST number"],
  },
  address: {
    type: String,
    required: [true, "Enter your address"],
  },
  loanAmount: {
    type: String,
    required: [true, "Enter the loan amount"],
    match: /^[0-9]+$/,
  },
  intrestRate: {
    type: String,
    required: [true, "Enter the intrest rate"],
    match: /^[0-9]+$/,
    max: 100,
  },
  loanTenure: {
    type: String,
    required: [true, "Enter the loan tenure"],
    match: /^[0-9]+$/,
  },
});

const LoanModel = mongoose.model("Loan", LoanSchema);

export default LoanModel;
