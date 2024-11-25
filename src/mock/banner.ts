import { HttpResponse, http } from "msw";
import { Book } from "@/types/book.type";
import { fakerKO as faker } from "@faker-js/faker";
import { Banner } from "@/types/banner.type";

const bannerData: Banner[] = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  title: faker.lorem.sentence(),
  description: faker.lorem.sentence(),
  image: `https://picsum.photos/id/${faker.number.int({ min: 100, max: 1000 })}/1200/400`,
  url: faker.internet.url(),
  target: "_blank",
}));

export const bannerList = http.get("http://localhost:9999/banners", () => {
  return HttpResponse.json<Banner[]>(bannerData, {
    status: 200,
  });
});
