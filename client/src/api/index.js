import axios from "axios";

const url = "http://localhost:5000/api/loan";

export const fetchLoan = () => axios.get(url);
export const createLoan = (newLoan) => axios.post(url, newLoan);
