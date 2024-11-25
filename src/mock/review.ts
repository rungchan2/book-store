import { HttpResponse, http } from "msw";
import { Review } from "@/types/book.type";
import { fakerKO as faker } from "@faker-js/faker";

const reviewData: Review[] = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  userName: faker.person.fullName(),
  content: faker.lorem.sentence(),
  score: faker.number.int({ min: 1, max: 5 }),
  createdAt: faker.date.past().toISOString(),
}));

export const reviewsById = http.get(
  "http://localhost:9999/reviews/:bookId",
  () => {
    return HttpResponse.json(reviewData, {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  }
);

export const addReview = http.post(
  "http://localhost:9999/reviews/:bookId",
  () => {
    return HttpResponse.json(
      {
        message: "리뷰가 등록되었습니다.",
      },
      {
        status: 200,
      }
    );
  }
);

export const reviewForMain = http.get(
  "http://localhost:9999/reviews",
  () => {
    return HttpResponse.json(reviewData, {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  }
);
