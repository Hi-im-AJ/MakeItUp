import React from "react";
import { render, screen } from "./test-utils";
import Product from "../components/Product";

describe("Product with a description", () => {
  it("Should detect if there is a product with a description", () => {

    render(<Product />);

    expect(screen.getByText(/Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
  });
});