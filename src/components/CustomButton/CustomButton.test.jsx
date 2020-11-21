import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CustomButton } from "components";

afterEach(cleanup);

it("renders correctly without crashing", () => {
  const { asFragment } = render(<CustomButton />);

  expect(asFragment()).toMatchSnapshot();
});
