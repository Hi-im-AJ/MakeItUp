import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Product from "../components/pages/Product";

describe("Product with a description", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it("Should detect if there is a product with a description", () => {
    act(() => render(<Product />));
    expect(screen.getByRole("loading")).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    screen.debug();
    expect(screen.getByRole("fulfilled")).toBeInTheDocument();
  });
});
