import { fetchBookDetail } from "../api/books.api";
import { useState, useEffect } from "react";
import { BookDetailResponse } from "../types/book.type";
import { likeBook, unLikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { Review } from "@/types/book.type";
import { getReviews, addReviewCall } from "@/api/review.api";
import { useToast } from "./useToast";


export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetailResponse | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isLoggedIn } = useAuthStore();
  const { showCustomToast } = useToast();

  const likeToggle = () => {
    if (!isLoggedIn) {
      showCustomToast("로그인 후 이용해주세요.", "info");
      return;
    }

    if (!bookResults) return;

    if (bookResults.liked) {
      unLikeBook(bookResults.id).then(() => {
        setBook({
          message: "unliked",
          results: [
            {
              ...bookResults,
              liked: false,
              likes: bookResults.likes - 1,
            },
          ],
        });
        showCustomToast("좋아요를 취소했습니다.", "success");
      });
    } else {
      likeBook(bookResults.id).then(() => {
        setBook({
          message: "liked",
          results: [
            {
              ...bookResults,
              liked: true,
              likes: bookResults.likes + 1,
            },
          ],
        });
        showCustomToast("좋아요를 눌렀습니다.", "success");
      });
    }
  };

  useEffect(() => {
    if (bookId) {
      fetchBookDetail(bookId).then((data) => {
        setBook(data);
      });

      getReviews(bookId).then((data) => {
        setReviews(data);
      });
    }
  }, [bookId]);

  const addReview = (review: Pick<Review, "content" | "score">) => {
    if (!bookId) return;
    
    addReviewCall(bookId, review).then((res) => {
      // getReviews(bookId).then((reviews) => {
      //   setReviews(reviews);
      // });
      showCustomToast(res.message, "success");
    });
  };

  const bookResults = book?.results[0];

  return { bookResults, likeToggle, reviews, addReview };
};
