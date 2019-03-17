import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard, { minWidth as GameCardMinWidth } from "./GameCard";

const CardGrid = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(${GameCardMinWidth}, 1fr));
  justify-items: center;
  align-items: end;
`;

export default function Catalog({ platforms, games }) {
  const [selectedPlatform, selectPlatform] = useState();
  const filteredGames = selectedPlatform
    ? games.filter(game => game.platform === selectedPlatform)
    : games;
  return (
    <div>
      <Header title="Game catalog" />
      <PlatformFilter
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        selectPlatform={selectPlatform}
      />
      <CardGrid>
        {filteredGames.map(game => (
          <GameCard key={game.name} {...game} />
        ))}
      </CardGrid>
    </div>
  );
}

Catalog.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  games: PropTypes.arrayOf(PropTypes.shape(GameCard.propTypes).isRequired)
    .isRequired
};
