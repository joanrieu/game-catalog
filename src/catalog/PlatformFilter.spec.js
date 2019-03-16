import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import PlatformFilter from "./PlatformFilter";

describe("PlatformFilter", () => {
  it("has a list of platforms", () => {
    const cmp = renderer.create(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectedPlatform="PS4"
        selectPlatform={() => {}}
      />
    );
    expect(cmp).toMatchSnapshot();
  });
  it("can change the selected platform", () => {
    const selectMock = jest.fn();
    const cmp = renderer.create(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectedPlatform="PS4"
        selectPlatform={selectMock}
      />
    );
    const buttons = cmp.root.findAllByType("button");
    expect(buttons.length).toBe(4);
    buttons[3].props.onClick();
    expect(selectMock).toHaveBeenCalledWith("Xbox");
  });
  it("can clear the selected platform", () => {
    const selectMock = jest.fn();
    const cmp = renderer.create(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectPlatform={selectMock}
      />
    );
    const buttons = cmp.root.findAllByType("button");
    expect(buttons.length).toBe(4);
    buttons[0].props.onClick();
    expect(selectMock).toHaveBeenCalledWith();
  });
});
