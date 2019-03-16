import React from "react";
import Catalog from "./Catalog";
import platforms from "../../assets/platforms.json";
import games from "../../assets/games.json";

export default function CatalogScreen() {
  return <Catalog platforms={platforms} games={games} />;
}
