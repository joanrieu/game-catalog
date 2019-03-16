import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import GameCard from "./GameCard";

describe("GameCard", () => {
  it("has a cover, a name and a platform", () => {
    const cmp = renderer.create(
      <GameCard name="Game" platform="PS4" cover="//placehold.it/359x411" />
    );
    expect(cmp).toMatchSnapshot();
  });
});
