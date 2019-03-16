import React from "react";
import styled from "styled-components";
import logoUrl from "../../assets/Video_game_controller_icon_designed_by_Maico_Amorim.svg";

const Wrapper = styled.header`
  background-color: black;
  display: flex;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding: 16px;
  fill: white;
`;

export default function Header({ title }) {
  return (
    <Wrapper>
      <Logo src={logoUrl} />
      <h1>{title}</h1>
    </Wrapper>
  );
}
