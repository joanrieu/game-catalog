import React from "react";
import { render, cleanup } from "react-testing-library";
import Catalog from "./Catalog";

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
  afterEach(cleanup);

  it("has a header, a platform filter and a list of games", () => {
    const cmp = render(<Catalog platforms={platforms} games={games} />);
    expect(cmp.asFragment()).toMatchSnapshot();
  });
});
