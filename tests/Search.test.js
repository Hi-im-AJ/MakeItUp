import React from "react";
import { render, screen } from "./test-utils";
import Search from "../components/Search";

describe("Search", () => {
  it("should render the heading", () => {
    render(<Search />);

    const heading = screen.getByText(/Search component/i);

    expect(heading).toBeInTheDocument();
  });
});
