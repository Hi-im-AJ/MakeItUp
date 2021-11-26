import React from "react";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";

describe("Search", () => {
  it("Should have a submit button", () => {
    render(<Search />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Search");
    expect(submitButton).toHaveAttribute("id", "submitButton");
  });
  it("Should have an input field", () => {
    render(<Search />);
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("id", "searchInput");
    expect(searchInput).toHaveAttribute("name", "searchInput");
  });
  it("Should return a handbag on search", () => {
    render(<Search />);
    const searchInput = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");
    userEvent.type(searchInput, "Handbag Holiday Cutile Oil");
    userEvent.click(submitButton);
    const product = screen.queryAllByRole("div").filter((e) => e.key === "j7FV4w");
    expect(product).toBeInTheDocument();
  });
});
