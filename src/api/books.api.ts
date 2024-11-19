import { httpClient } from "./http";
import { Book, BookDetailResponse } from "../types/book.type";
import { Pagination } from "../types/pagination.type";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit?: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {

    try {
        const response = await httpClient.get<FetchBooksResponse>("/books", { 
            params: params
    });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        currentPage: 1,
        totalCount: 0,
      },
    };
  }
};

export const fetchBookDetail = async (bookId: string) => {
  try {
    const response = await httpClient.get<BookDetailResponse>(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const likeBook = async (bookId: number) => {
    try {
        const response = await httpClient.post(`/likes/${bookId}`);
        return response.data;
    } catch (error) {
        return null;
    }
}

export const unLikeBook = async (bookId: number) => {
    try {
        const response = await httpClient.delete(`/likes/${bookId}`);
        return response.data;
    } catch (error) {
        return null;
    }
}