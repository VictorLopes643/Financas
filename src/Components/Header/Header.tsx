import { useState } from "react";
import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.svg'

interface Iheader {
  onOpenNewModal: () => void;
}
export function Header({ onOpenNewModal }:Iheader){

  return (
    <Container>
      <Content> 
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={onOpenNewModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}