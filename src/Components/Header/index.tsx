import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";


interface HeaderProps { 
  onOpenNewTransactionModal: () => void;
}


export const Header: React.FC<HeaderProps> = ({onOpenNewTransactionModal}) => {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};