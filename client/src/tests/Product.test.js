import { render, screen } from "@testing-library/react";
import Product from "../components/pages/Product";

describe("Product with a description", () => {
  it("Should detect if there is a product with a description", async () => {
    render(<Product />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(await screen.findByRole("article")).toBeInTheDocument();
    screen.debug();
  });
});
