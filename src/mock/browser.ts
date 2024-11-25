import { setupWorker } from "msw/browser";
import { reviewsById, addReview, reviewForMain } from "./review";
import { bestSeller } from "./books";
import { bannerList } from "./banner";
const handlers = [
  reviewsById,
  addReview,
  reviewForMain,
  bestSeller,
  bannerList,
  bannerList,
];

export const worker = setupWorker(...handlers);
