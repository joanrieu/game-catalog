import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import GameCard from "./GameCard";

describe("GameCard", () => {
  it("has a screenshot, a title and a platform", () => {
    const cmp = renderer.create(
      <GameCard
        title="Title"
        platform="PS4"
        screenshot="//placehold.it/300x300"
      />
    );
    expect(cmp).toMatchSnapshot();
  });
});
