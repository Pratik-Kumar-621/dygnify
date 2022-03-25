import express from "express";
import { getLoanData, postLoanData } from "../controllers/loan.js";

const router = express.Router();

router.route("/").get(getLoanData);
router.route("/").post(postLoanData);

export default router;
