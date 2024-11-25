import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Book } from "../types/book.type";
import { Pagination } from "../types/pagination.type";
import { fetchBooks } from "../api/books.api";
import { QUERY_STRING } from "../constants/queryString";
import { LIMIT } from "../constants/pagnation";
import { useQuery } from "react-query";

interface UseBooks {
  books: Book[];
  pagination: Pagination;
  isEmpty: boolean;
}

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data: booksData, isLoading: isBooksLoading } = useQuery(["books", location.search], () => 
    fetchBooks({
      category_id: params.get(QUERY_STRING.CATEGORY_ID)
        ? Number(params.get(QUERY_STRING.CATEGORY_ID))
        : undefined,
      news: params.get(QUERY_STRING.NEW) ? true : undefined,
      currentPage: params.get(QUERY_STRING.PAGE)
        ? Number(params.get(QUERY_STRING.PAGE))
        : 1,
      limit: LIMIT,
    })
  );

  return { 
    books: booksData?.books,
    pagination: booksData?.pagination,
    isEmpty: booksData?.books.length === 0,
    isBooksLoading
  };
};
