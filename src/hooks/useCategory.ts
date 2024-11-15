import { useState } from "react";
import { Category } from "../types/category.type";
import { getCategories } from "../api/category.api";
import { useEffect } from "react";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((categories) => {
        if (!categories) return
      const categoryAll = [
        {
          id: null,
          name: "전체",
        },
        ...categories,
      ];

      setCategories(categoryAll);
    });
  }, []);

  return { categories, setCategories };
};
