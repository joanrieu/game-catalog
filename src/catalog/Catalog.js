import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

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
      <div>
        {filteredGames.map(game => (
          <GameCard key={game.name} {...game} />
        ))}
      </div>
    </div>
  );
}

Catalog.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  games: PropTypes.arrayOf(PropTypes.shape(GameCard.propTypes).isRequired)
    .isRequired
};
