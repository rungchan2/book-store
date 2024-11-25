import { requestHandler } from "@/api/http";
import { Review } from "@/types/book.type";


export const getReviews = async (bookId: string) => {
  return requestHandler<Review[]>("get", `http://localhost:9999/reviews/${bookId}`);
};

export const addReviewCall = async (bookId: string, review: Pick<Review, "content" | "score">) => {
  return requestHandler<Pick<Review, "content" | "score">>("post", `http://localhost:9999/reviews/${bookId}`, review);
};

export const fetchReviewsAll = async () => {
  return requestHandler<Review[]>("get", `http://localhost:9999/reviews`);
};
