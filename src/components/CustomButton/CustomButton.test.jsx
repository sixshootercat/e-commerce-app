import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CustomButton } from "components";

afterEach(cleanup);

describe("<CustomButton />", () => {
  it("renders correctly without crashing", () => {
    const { asFragment } = render(<CustomButton />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button children correctly", () => {
    const { getByText } = render(<CustomButton>Whatever</CustomButton>);
    getByText(/Whatever/i);
  });
});
