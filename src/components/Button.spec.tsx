import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { BookStoreProvider } from "../context/themeContext";

describe("Button", () => {
  it("renders correctly", () => {
    render(
      <BookStoreProvider>
        <Button size="lg" scheme="primary">Click me</Button>
      </BookStoreProvider>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  it("disabled 속성 적용", () => {
    render(
      <BookStoreProvider>
        <Button size="lg" scheme="primary" disabled>Click me</Button>
      </BookStoreProvider>
    );
    expect(screen.getByText("Click me")).toBeDisabled();
  });
});
