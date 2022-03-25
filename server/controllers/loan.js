import LoanModel from "../models/LoanModel.js";

export const getLoanData = async (req, res) => {
  try {
    const loanData = await LoanModel.find();
    res.status(200).send({
      status: "success",
      data: loanData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const postLoanData = async (req, res) => {
  const loanData = req.body;
  const newLoanData = new LoanModel(loanData);
  try {
    const savedData = await newLoanData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
