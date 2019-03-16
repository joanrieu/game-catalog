import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.section`
  min-width: 320px;
  max-width: 350px;
  background: #c4c4c4;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const Screenshot = styled.img`
  height: 411px;
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

export default function GameCard({ title, platform, screenshot }) {
  return (
    <Card>
      <Screenshot src={screenshot} />
      <Description>
        <Name>{title}</Name>
        <Platform>{platform}</Platform>
      </Description>
    </Card>
  );
}

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  screenshot: PropTypes.string
};
