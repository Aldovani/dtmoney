import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};
type TransactionsInput = Omit<Transaction, "id" | "createdAt">;

type TransactionsProviderProps = {
  children: React.ReactNode;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionsInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
