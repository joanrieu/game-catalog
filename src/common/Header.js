import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoUrl from "../../assets/Video_game_controller_icon_designed_by_Maico_Amorim.svg";

const Wrapper = styled.header`
  background-color: #333333;
  color: white;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding: 16px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

export default function Header({ title }) {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logoUrl} />
      </Link>
      <Title>{title}</Title>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
