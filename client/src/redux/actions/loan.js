import { FIND_LOAN, SAVE_LOAN } from "../constants/actionTypes";
import * as api from "../../api";

export const getLoanData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLoan();
    dispatch({ type: FIND_LOAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postLoanData = (post) => async (dispatch) => {
  try {
    const { data } = await api.createLoan(post);
    dispatch({ type: SAVE_LOAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
