import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./Catalog";
import Header from "../common/Header";
import PlatformFilter from "./PlatformFilter";
import GameCard from "./GameCard";

describe("Catalog", () => {
  it("has a header, a platform filter and a list of games", () => {
    const cmp = renderer.create(
      <Catalog
        platforms={["PC", "PS4", "Xbox", "GBA"]}
        games={[
          {
            title: "Rayman",
            platform: "GBA"
          },
          {
            title: "Rainbow Six",
            platform: "PC"
          },
          {
            title: "Just Dance",
            platform: "Xbox"
          }
        ]}
      />
    );
    expect(cmp).toMatchSnapshot();
  });
});
