import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Details from "./Details";

const game = {
  name: "Rainbow Six",
  platform: "PC",
  hero: "//placehold.it/359x411",
  description: "Lorem ipsum.\n\nLorem ipsum."
};

describe("Details", () => {
  it("has a hero image, a name, a platform and a multi-paragraph description", () => {
    const cmp = renderer.create(<Details {...game} />);
    expect(cmp).toMatchSnapshot();
  });
});
