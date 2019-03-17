import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import PlatformFilter from "./PlatformFilter";

describe("PlatformFilter", () => {
  afterEach(cleanup);

  it("has a list of platforms", () => {
    const cmp = render(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectedPlatform="PS4"
        selectPlatform={() => {}}
      />
    );
    expect(cmp.asFragment()).toMatchSnapshot();
  });

  it("can change the selected platform", () => {
    const selectMock = jest.fn();
    const cmp = render(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectedPlatform="PS4"
        selectPlatform={selectMock}
      />
    );
    fireEvent.click(cmp.getByText("Xbox"));
    expect(selectMock).toHaveBeenCalledWith("Xbox");
  });

  it("can clear the selected platform", () => {
    const selectMock = jest.fn();
    const cmp = render(
      <PlatformFilter
        platforms={["PC", "PS4", "Xbox"]}
        selectPlatform={selectMock}
      />
    );
    fireEvent.click(cmp.getByText("All"));
    expect(selectMock).toHaveBeenCalledWith();
  });
});
