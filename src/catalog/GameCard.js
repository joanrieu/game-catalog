import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const Cover = styled.div`
  flex: 1;
  background-color: #c4c4c4;
  background-image: url(${props => props.cover});
  background-position: center;
  background-size: cover;
`;

const Description = styled.div`
  padding: 16px;
  background: white;
`;

const Name = styled.h2`
  font-weight: normal;
  font-size: 18px;
`;

const Platform = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

export default function GameCard({ name, platform, cover }) {
  return (
    <Card>
      <Cover cover={cover}> </Cover>
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
