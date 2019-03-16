import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 16px;
`;

const Platform = styled.button`
  border: none;
  background: transparent;
  font: inherit;
  color: ${props => (props.isSelected ? "#FE6050" : "inherit")}
  outline-color: #FE6050;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 28px;
  }
`;

export default function PlatformFilter({
  platforms,
  selectedPlatform,
  selectPlatform
}) {
  return (
    <Wrapper>
      <Platform onClick={() => selectPlatform()} isSelected={!selectedPlatform}>
        All
      </Platform>
      {platforms.map(platform => (
        <Platform
          key={platform}
          onClick={() => selectPlatform(platform)}
          isSelected={platform === selectedPlatform}
        >
          {platform}
        </Platform>
      ))}
    </Wrapper>
  );
}

PlatformFilter.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedPlatform: PropTypes.string,
  selectPlatform: PropTypes.func.isRequired
};
