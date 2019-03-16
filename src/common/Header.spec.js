import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Header from "./Header";

describe("Header", () => {
  it("has a logo and a title", () => {
    const cmp = renderer.create(<Header title="TITLE" />);
    expect(cmp).toMatchSnapshot();
  });
});
