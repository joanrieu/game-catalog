import React from "react";
import Renderer from "react-test-renderer/shallow";
import "jest-styled-components";
import Catalog from "./Catalog";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

const platforms = ["PC", "PS4", "Xbox", "GBA"];

const games = [
  {
    name: "Rayman",
    platform: "GBA",
    cover: "//placehold.it/359x411"
  },
  {
    name: "Rainbow Six",
    platform: "PC",
    cover: "//placehold.it/359x411"
  },
  {
    name: "Just Dance",
    platform: "Xbox",
    cover: "//placehold.it/359x411"
  }
];

describe("Catalog", () => {
  it("has a header, a platform filter and a list of games", () => {
    const cmp = new Renderer().render(
      <Catalog platforms={platforms} games={games} />
    );
    expect(cmp).toMatchSnapshot();
  });
});
