import Title from "./Title";
import { render, screen } from "@testing-library/react";
import { BookStoreProvider } from "../context/themeContext";
import { lightTheme } from "../style/theme";
describe("Title", () => {
  it("renders correctly", () => {
    render(
      <BookStoreProvider>
        <Title size="lg" color="text">
          Hello
        </Title>
      </BookStoreProvider>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
  it("size props 적용", () => {
    const { container } = render(
      <BookStoreProvider>
        <Title size="lg" color="text">
          Hello
        </Title>
      </BookStoreProvider>
    );
    expect(container.firstChild).toHaveStyle("font-size: 2rem");
  });
//   it("color props 적용", () => {
//     const { container } = render(
//       <BookStoreProvider>
//         <Title size="lg" color="primary">
//           Hello
//         </Title>
//       </BookStoreProvider>
//     );
//     expect(container.firstChild).toHaveStyle(`color: ${lightTheme.color.primary}`);
//   });
});
