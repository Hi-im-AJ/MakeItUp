import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";
import ProductState from "../context/product/ProductState";

describe("Search", () => {
  it("Should have a submit button", () => {
    render(
      <ProductState>
        <Search />
      </ProductState>
    );
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Search");
    expect(submitButton).toHaveAttribute("id", "submitButton");
  });
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
  it("Should return a handbag on search", () => {
    render(
      <ProductState>
        <Search />
      </ProductState>
    );
    const searchInput = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");
    userEvent.type(searchInput, "Handbag Holiday Cutile Oil");
    userEvent.click(submitButton);
    const product = screen.getAllByRole("div").filter((e) => e.key === "j7FV4w");
    expect(product).toBeInTheDocument();
  });
});
