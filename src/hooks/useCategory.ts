import { useState } from "react";
import { Category, CategoryResponse } from "../types/category.type";
import { getCategories } from "../api/category.api";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QUERY_STRING } from "../constants/queryString";

export const useCategory = () => {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERY_STRING.CATEGORY_ID)) {
      setCategories((prev) =>
        prev.map((category) => ({
          ...category,
          isActive: category.category_id === Number(params.get(QUERY_STRING.CATEGORY_ID)),
        }))
      );
    } else {
      setCategories((prev) =>
        prev.map((category) =>
          category.category_id !== null
            ? {
                ...category,
                isActive: false,
              }
            : {
                ...category,
                isActive: true,
              }
        )
      );
    }
  };

  useEffect(() => {
    getCategories().then((response) => {
      if (!response) return;

      const categoryAll = [
        {
          category_id: null,
          category_name: "전체",
          isActive: false,
        },
        ...response.results,
      ];

      setCategories(categoryAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { categories };
};
