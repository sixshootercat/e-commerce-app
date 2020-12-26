import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import PageNotFound from "../";

afterEach(cleanup);

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <PageNotFound />
      </Router>
    );
  });

  it("displays 404 message", () => {
    const { getByText } = render(
      <Router>
        <PageNotFound />
      </Router>
    );
    getByText(/404 - Page Not Found/i);
  });
});
