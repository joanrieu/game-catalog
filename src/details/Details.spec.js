import React from "react";
import { render, cleanup } from "react-testing-library";
import Details from "./Details";

const game = {
  name: "Rainbow Six",
  platform: "PC",
  hero: "//placehold.it/359x411",
  description: "Lorem ipsum.\n\nLorem ipsum."
};

describe("Details", () => {
  afterEach(cleanup);

  it("has a hero image, a name, a platform and a multi-paragraph description", () => {
    const cmp = render(<Details {...game} />);
    expect(cmp.asFragment()).toMatchSnapshot();
  });
});
