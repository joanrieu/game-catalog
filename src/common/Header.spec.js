import React from "react";
import { render, cleanup } from "react-testing-library";
import Header from "./Header";

describe("Header", () => {
  afterEach(cleanup);

  it("has a logo and a title", () => {
    const cmp = render(<Header title="TITLE" />);
    expect(cmp.asFragment()).toMatchSnapshot();
  });
});
