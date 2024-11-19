import { fetchBookDetail } from "../api/books.api";
import { useState, useEffect } from "react";
import { BookDetailResponse } from "../types/book.type";
import { likeBook, unLikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetailResponse | null>(null);
  const { isLoggedIn } = useAuthStore();
  const {showAlert} = useAlert();

  const likeToggle = () => {


    if (!isLoggedIn) {
        showAlert('로그인 후 이용해주세요.');
      return;
    }

    if (!bookResults) return;

    if (bookResults.liked) {
      unLikeBook(bookResults.id).then(() => {
        setBook({
            message: 'unliked',
            results: [
                {
                    ...bookResults,
                    liked: false,
                    likes: bookResults.likes - 1,
                }
            ]
        })
      })
    } else {
      likeBook(bookResults.id).then(() => {
        setBook({
            message: 'liked',
            results: [
                {
                    ...bookResults,
                    liked: true,
                    likes: bookResults.likes + 1,
                }
            ]
        })
      });
    }
  }
  
  useEffect(() => {
    if (bookId) {
      fetchBookDetail(bookId).then((data) => {
        setBook(data);
      });
    }
  }, [bookId]);

  const bookResults = book?.results[0]

  return { bookResults, likeToggle };
};