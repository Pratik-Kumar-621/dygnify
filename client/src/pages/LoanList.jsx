import { Heading } from "../components/Heading";
import { Loan } from "../components/Loan";

export const LoanList = () => {
  return (
    <div className="loan-list-section">
      <Heading heading="Dygnigy Loan Data" />

      <Loan />
    </div>
  );
};
