import { Book, Review } from "@/types/book.type";
import { useState, useEffect } from "react";
import { fetchReviewsAll } from "@/api/review.api";
import { fetchBooks } from "@/api/books.api";
import { IBookDetail } from "@/types/book.type";
import { fetchBestSeller } from "@/api/books.api";
import { getBannerList } from "@/api/banner.api";
import { Banner } from "@/types/banner.type";
export const useMain = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [bestSeller, setBestSeller] = useState<Book[]>([]);
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  useEffect(() => {
    fetchReviewsAll()
      .then((reviews) => setReviews(reviews))
      .catch((error) => {
        console.error("useMainError", error);
      });

    fetchBooks(
      {
        category_id: undefined,
        currentPage: 1,
        limit: 4,
        news: true,
      }
    )
      .then((res) => setBooks(res.books))
      .catch((error) => {
        console.error("useMainBooksError", error);
      });

    fetchBestSeller()
      .then((res) => setBestSeller(res))
      .catch((error) => {
        console.error("useMainBestSellerError", error);
      });

    getBannerList()
      .then((res) => {
        setBannerList(res);
      })
      .catch((error) => {
        console.error("useMainBannerListError", error);
      });
  }, []);

  return {
    reviews,
    books,
    bestSeller,
    bannerList,
  };
};
