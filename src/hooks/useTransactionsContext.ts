import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext);
  return context;
};
