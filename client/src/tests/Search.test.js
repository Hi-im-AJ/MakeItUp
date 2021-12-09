import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";
import ProductState from "../context/product/ProductState";

describe("Search", () => {
  it("Should have an input field", () => {
    render(
      <ProductState>
        <Search />
      </ProductState>
    );
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("id", "searchInput");
    expect(searchInput).toHaveAttribute("name", "searchInput");
  });
  it("Should return a handbag on search", async () => {
    render(
      <ProductState>
        <Search />
      </ProductState>
    );
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "Handbag Holiday Cutile Oil");
    const product = await screen.findAllByRole("div").filter((e) => e.key === "j7FV4w");
    expect(product).toBeInTheDocument();
  });
});
