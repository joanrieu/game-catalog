import React from "react";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

export default function Catalog() {
  return (
    <div>
      <Header title="Game catalog" />
      <PlatformFilter />
      <div>
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
