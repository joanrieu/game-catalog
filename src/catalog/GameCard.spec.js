import React from "react";
import { render, cleanup } from "react-testing-library";
import GameCard from "./GameCard";

describe("GameCard", () => {
  afterEach(cleanup);

  it("has a cover, a name and a platform", () => {
    const cmp = render(
      <GameCard name="Rayman" platform="PS4" cover="//placehold.it/359x411" />
    );
    expect(cmp.asFragment()).toMatchSnapshot();
  });
});
