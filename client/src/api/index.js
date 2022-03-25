import axios from "axios";

const url = "https://dygnify.herokuapp.com/api/loan";

export const fetchLoan = () => axios.get(url);
export const createLoan = (newLoan) => axios.post(url, newLoan);
