import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./Catalog";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

describe("Catalog", () => {
  it("has a header", () => {
    const cmp = renderer.create(<Catalog />);
    expect(cmp.root.findByType(Header)).toBeTruthy();
  });
  it("has a platform filter", () => {
    const cmp = renderer.create(<Catalog />);
    expect(cmp.root.findByType(PlatformFilter)).toBeTruthy();
  });
  it("renders a list of games", () => {
    const cmp = renderer.create(<Catalog />);
    expect(cmp.root.findAllByType(GameCard).length).toBeGreaterThan(0);
  });
});
