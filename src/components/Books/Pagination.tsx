import React from "react";
import { Pagination as PaginationType } from "../../types/pagination.type";
import { LIMIT } from "../../constants/pagnation";
import styled from "styled-components";
import Button from "../Button";
import { useSearchParams } from "react-router-dom";
import { QUERY_STRING } from "../../constants/queryString";

export default function Pagination({
  pagination,
}: {
  pagination: PaginationType;
}) {
  const { currentPage, totalCount } = pagination;
  const pages = Math.ceil(totalCount / LIMIT);
  const [ searchParams, setSearchParams ] = useSearchParams();

  const handlePageClick = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERY_STRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <PaginationContainer>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => {
              return (
                <li key={index}>
                  <Button
                    size="sm"
                    scheme={currentPage === index + 1 ? "primary" : "secondary"}
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </Button>
                </li>
              );
            })}
        </ol>
      )}
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  ol {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }
`;
