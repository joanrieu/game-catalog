import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./Catalog";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";
import platforms from "../../assets/platforms.json";
import games from "../../assets/games.json";

describe("Catalog", () => {
  it("has a header, a platform filter and a list of games", () => {
    const cmp = renderer.create(
      <Catalog platforms={platforms} games={games} />
    );
    expect(cmp).toMatchSnapshot();
  });
});
