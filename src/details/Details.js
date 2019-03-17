import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../common/Header";

const Hero = styled.div`
  height: 368px;
  background-color: #c4c4c4;
  background-image: url(${props => props.hero});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
`;

const Sheet = styled.article`
  max-width: 1168px;
  margin: 64px auto;
  padding: 64px 84px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  background-color: white;
`;

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Platform = styled.p``;

const Description = styled.div`
  color: black;

  > p {
    margin-top: 32px;
  }
`;

export default function Details({ hero, name, platform, description }) {
  return (
    <React.Fragment>
      <Header title="Game details" />
      <Hero hero={hero} />
      <Sheet>
        <Headline>
          <Name>{name}</Name>
          <Platform>{platform}</Platform>
        </Headline>
        <Description>
          {description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Description>
      </Sheet>
    </React.Fragment>
  );
}

Details.propTypes = {
  hero: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
