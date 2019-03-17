import React from "react";
import PropTypes from "prop-types";
import Details from "./Details";
import games from "../../assets/games.json";

export default function DetailsScreen({ gameId }) {
  return <Details {...games[gameId]} />;
}

DetailsScreen.propTypes = {
  gameId: PropTypes.string.isRequired
};
