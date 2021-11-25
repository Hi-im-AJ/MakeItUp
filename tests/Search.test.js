import React from "react";
import { render, screen } from "./test-utils";
import Search from "../components/Search";

describe("Search", () => {
  it("should render the heading", () => {
    render(<Search />);

    const heading = screen.getByText(/Search component/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
