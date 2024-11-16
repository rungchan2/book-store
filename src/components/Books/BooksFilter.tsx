import React from "react";
import styled from "styled-components";
import Title from "../Title";
import { useCategory } from "../../hooks/useCategory";
import Button from "../Button";
import { useSearchParams } from "react-router-dom";
import { QUERY_STRING } from "../../constants/queryString";
export default function BooksFilter() {
  const { categories } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete(QUERY_STRING.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERY_STRING.CATEGORY_ID, id.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleNew = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (newSearchParams.get(QUERY_STRING.NEW)) {
      newSearchParams.delete(QUERY_STRING.NEW);
    } else {
      newSearchParams.set(QUERY_STRING.NEW, "true");
    }
    setSearchParams(newSearchParams);
  };

  return (
    <BooksFilterContainer>
      <div className="category">
        {categories.map((category) => (
          <Button
            key={category.category_id}
            size="md"
            scheme={category.isActive ? "primary" : "secondary"}
            onClick={() => {
              handleCategory(category.category_id);
            }}
          >
            {category.category_name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="md"
          scheme={searchParams.get("new") ? "primary" : "secondary"}
          onClick={() => {
            handleNew();
          }}
        >
          신간 도서
        </Button>
      </div>
    </BooksFilterContainer>
  );
}

const BooksFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  .category {
    display: flex;
    gap: 0.5rem;
  }
`;
