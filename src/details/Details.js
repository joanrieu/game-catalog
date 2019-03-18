import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../common/Header";
import {
  smallScreenOnly,
  mediumScreen,
  largeScreen
} from "../common/breakpoints";

const Hero = styled.div`
  height: 368px;
  background-color: #c4c4c4;
  background-image: url(${props => props.hero});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
`;

const SheetWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Sheet = styled.article`
  max-width: 1168px;
  margin: 8px;
  padding: 32px 16px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  background-color: white;

  @media (${mediumScreen}) {
    margin: 5vw;
    padding: 5vw 7vw;
  }

  @media (${largeScreen}) {
    margin: 64px;
    padding: 64px 84px;
  }
`;

const Headline = styled.div`
  @media (${mediumScreen}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Platform = styled.p`
  @media (${smallScreenOnly}) {
    margin-top: 16px;
  }

  @media (${mediumScreen}) {
    margin-left: 16px;
  }
`;

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
      <SheetWrapper>
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
      </SheetWrapper>
    </React.Fragment>
  );
}

Details.propTypes = {
  hero: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
