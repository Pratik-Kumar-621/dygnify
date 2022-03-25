import { FIND_LOAN, SAVE_LOAN } from "../constants/actionTypes";
import * as api from "../../api";

export const getLoanData = () => async (next) => {
  try {
    const { data } = await api.fetchLoan();
    next({ type: FIND_LOAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postLoanData = (post) => async (next) => {
  try {
    const { data } = await api.createLoan(post);
    console.log(data);
    next({ type: SAVE_LOAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
