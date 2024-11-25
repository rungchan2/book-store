import { httpClient, requestHandler } from "./http";
import { Banner } from "@/types/banner.type";

export const getBannerList = async () => {
  return requestHandler<Banner[]>("get", "http://localhost:9999/banners");
};
