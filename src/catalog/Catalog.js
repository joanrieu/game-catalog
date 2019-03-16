import React from "react";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

export default function Catalog() {
  return (
    <div>
      <Header />
      <PlatformFilter />
      <div>
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
