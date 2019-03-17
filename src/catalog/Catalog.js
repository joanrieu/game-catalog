import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  max-width: 358px;
  color: inherit;
  text-decoration: inherit;
`;

const CardGrid = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 492px;
  justify-items: center;
  align-items: end;
`;

export default function Catalog({ platforms, games }) {
  const [selectedPlatform, selectPlatform] = useState();
  const filteredGames = selectedPlatform
    ? games.filter(game => game.platform === selectedPlatform)
    : games;
  return (
    <React.Fragment>
      <Header
        title={
          "Game catalog" + (selectedPlatform ? ` (${selectedPlatform})` : "")
        }
      />
      <PlatformFilter
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        selectPlatform={selectPlatform}
      />
      <CardGrid>
        {filteredGames.map((game, i) => (
          <CardLink key={i} to={"/game/" + i}>
            <GameCard {...game} />
          </CardLink>
        ))}
      </CardGrid>
    </React.Fragment>
  );
}

Catalog.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  games: PropTypes.arrayOf(PropTypes.shape(GameCard.propTypes).isRequired)
    .isRequired
};
