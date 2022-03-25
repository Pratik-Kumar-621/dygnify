import { FIND_LOAN, SAVE_LOAN } from "../constants/actionTypes";

export const loan = (loan = [], action) => {
  switch (action.type) {
    case FIND_LOAN:
      return action.payload.data ?? [];
    case SAVE_LOAN:
      return [...loan, action.payload];

    default:
      return loan;
  }
};
