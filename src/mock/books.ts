import { HttpResponse, http } from "msw";
import { Book } from "@/types/book.type";
import { fakerKO as faker } from "@faker-js/faker";

const bestSellerData: Book[] = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  title: faker.lorem.sentence(),
  image: faker.number.int({ min: 100, max: 999 }),
  category_id: faker.number.int({ min: 1, max: 5 }),
  form: faker.lorem.sentence(),
  isbn: faker.string.uuid(),
  summary: faker.lorem.sentence(),
  detail: faker.lorem.paragraph(),
  author: faker.person.fullName(),
  pages: faker.number.int({ min: 100, max: 500 }),
  contents: faker.lorem.paragraph(),
  price: faker.number.int({ min: 10000, max: 50000 }),
  likes: faker.number.int({ min: 0, max: 1000 }),
  pubDate: faker.date.past().toISOString(),
}));

export const bestSeller = http.get(
  "http://localhost:9999/books/best-seller",
  () => {
    return HttpResponse.json(bestSellerData, {
      status: 200,
    });
  }
);
