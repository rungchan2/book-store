import Title from "./Title";
import { render, screen } from "@testing-library/react";
import { BookStoreProvider } from "../context/themeContext";
import InputText from "./InputText";
import { createRef } from "react";

describe("InputText", () => {
  it("renders correctly", () => {
    render(
      <BookStoreProvider>
        <InputText placeholder="Enter your name" />
      </BookStoreProvider>
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });
  it('forward Ref 테스트', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <BookStoreProvider>
        <InputText placeholder="Enter your name" ref={ref} />
      </BookStoreProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  })
});
