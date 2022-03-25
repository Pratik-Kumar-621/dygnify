import "./app.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoanData } from "./redux/actions/loan";
import { LoanForm } from "./pages/LoanForm";
import { LoanList } from "./pages/LoanList";
import "./styles/styles.scss";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoanData());
  }, [dispatch]);
  return (
    <div className="App">
      <LoanForm />
      <LoanList />
    </div>
  );
};
