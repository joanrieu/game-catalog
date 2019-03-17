import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const minWidth = "280px";

const Card = styled.section`
  min-width: ${minWidth};
  max-width: 359px;
  background: #c4c4c4;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const Cover = styled.img`
  width: 100%;
  height: 411px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 16px;
  background: #ffffff;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 18px;
`;

const Platform = styled.p`
  margin: 0;
  margin-top: 8px;
  padding: 0;
  font-size: 14px;
`;

export default function GameCard({ name, platform, cover }) {
  return (
    <Card>
      <Cover src={cover} />
      <Description>
        <Name>{name}</Name>
        <Platform>{platform}</Platform>
      </Description>
    </Card>
  );
}

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};
