import React from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactionsContext();

  const { income, outcome, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(outcome)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
};
