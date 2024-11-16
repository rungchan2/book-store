import BookItem from "./BookItem";
import { render } from "@testing-library/react";
import { Book } from "../../types/book.type";
import { BookStoreProvider } from "../../context/themeContext";
import { formatNumber } from "../../utils/formatNumber";
import { getBookImage } from "../../utils/image";
const dummyBook: Book = {
  id: 1,
  title: "도서 제목",
  image: 1,
  category_id: 1,
  form: "종이책",
  isbn: "1234567890",
  summary: "도서 설명",
  detail: "도서 설명",
  author: "저자",
  pages: 100,
  contents: "도서 설명",
  price: 10000,
  likes: 100,
  pubDate: "2024-01-01",
};

describe("BookItem", () => {
  it("renders", () => {
    const { getByText, getByAltText } = render(
      <BookStoreProvider>
        <BookItem book={dummyBook} view="list" />
      </BookStoreProvider>
    );
    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText(formatNumber(dummyBook.price))).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      getBookImage(dummyBook.id)
    );
  });
});
