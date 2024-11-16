import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Book } from "../types/book.type";
import { Pagination } from "../types/pagination.type";
import { fetchBooks } from "../api/books.api";
import { QUERY_STRING } from "../constants/queryString";
import { LIMIT } from "../constants/pagnation";

interface UseBooks {
  books: Book[];
  pagination: Pagination;
  isEmpty: boolean;
}

export const useBooks = () : UseBooks =>  {
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalCount: 0,
  });
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetchBooks({
      category_id: params.get(QUERY_STRING.CATEGORY_ID)
        ? Number(params.get(QUERY_STRING.CATEGORY_ID))
        : undefined,
      news: params.get(QUERY_STRING.NEW) ? true : undefined,
      currentPage: params.get(QUERY_STRING.PAGE)
        ? Number(params.get(QUERY_STRING.PAGE))
        : 1,
      limit: LIMIT,
    }).then((data) => {
      setBooks(data.books);
      setPagination(data.pagination);
      setIsEmpty(data.books.length === 0);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
};
