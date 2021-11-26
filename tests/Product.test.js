import React from "react";
import { render, screen } from "./test-utils";
import Product from "../components/Product";

describe("Product with a description", () => {
  it("Should detect if there is a product with a description", () => {
    render(<Product />);

    const headingPro = screen.getByText(/Product component/i);
    const headingDes = screen.getByText(/Description component/i);

    expect(headingPro).toBeInTheDocument();
    expect(headingDes).toBeInTheDocument();
  });
});
