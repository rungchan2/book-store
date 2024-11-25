import styled from "styled-components";
import Title from "@/components/Title";
import InputText from "../InputText";
import Button from "../Button";
import { Review } from "@/types/book.type";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddReview({
  addReview,
}: {
  addReview: (review: Pick<Review, "content" | "score">) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<Review, "content" | "score">>();

  const handleAdd = (data: Pick<Review, "content" | "score">) => {
    addReview(data);
    console.log(data);
  };

  return (
    <StyledAddReview>
      <Title size="md" color="black">
        리뷰 작성
      </Title>
      <form onSubmit={handleSubmit(handleAdd)}>
        <fieldset>
          <label htmlFor="score">평점</label>
          <select id="score" {...register("score", { required: true })}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          {errors.score && <span className='error'>평점을 선택해주세요.</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="content">리뷰</label>
          <textarea
            id="content"
            placeholder="리뷰를 작성해주세요."
            {...register("content", { required: true })}
          />
          {errors.content && <span className='error'>리뷰를 작성해주세요.</span>}
        </fieldset>

        <Button scheme="primary" size="md" type="submit">
          리뷰 작성
        </Button>
      </form>
    </StyledAddReview>
  );
}

const StyledAddReview = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;

    fieldset {
      display: flex;
      gap: 8px;
      border: none;
      flex-direction: column;
      padding: 0;

      select {
        width: 50%;
        height: 32px;
      }

      label {
        font-size: 16px;
      }
      .error {
        color: red;
      }
    }
  }
`;
