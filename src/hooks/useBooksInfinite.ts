import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Book } from "../types/book.type";
import { Pagination } from "../types/pagination.type";
import { fetchBooks } from "../api/books.api";
import { QUERY_STRING } from "../constants/queryString";
import { LIMIT } from "../constants/pagnation";
import { useInfiniteQuery, useQuery } from "react-query";

interface UseBooks {
  books: Book[];
  pagination: Pagination;
  isEmpty: boolean;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const useBooksInfinite = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const getBooks = ({ pageParam }: { pageParam: number }) => {
    const category_id = params.get(QUERY_STRING.CATEGORY_ID)
      ? Number(params.get(QUERY_STRING.CATEGORY_ID))
      : undefined;

    const news = params.get(QUERY_STRING.NEW) ? true : undefined;

    const limit = LIMIT;
    const currentPage = pageParam;

    return fetchBooks({ category_id, news, currentPage, limit });
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<FetchBooksResponse>(
    ["books", location.search],
    ({ pageParam = 1 }) => getBooks({ pageParam }),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage?.pagination) return undefined;
        
        const isLastPage =
          Math.ceil(lastPage.pagination.totalCount / LIMIT) ===
          lastPage.pagination.currentPage;
        return isLastPage ? undefined : lastPage.pagination.currentPage + 1;
      },
      retry: 1,
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.error('도서 목록을 불러오는데 실패했습니다:', error);
      }
    }
  );

  const books = data?.pages?.flatMap((page) => page.books ?? []) ?? [];
  const pagination = data?.pages?.[data.pages.length - 1]?.pagination ?? null;
  const isEmpty = books.length === 0;

  return {
    books,
    fetchNextPage,
    hasNextPage,
    isBooksLoading: isFetching,
    pagination,
    isEmpty,
  };
};
