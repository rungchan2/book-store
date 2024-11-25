import { Review } from '@/types/book.type'
import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'

export default function BookReview({reviews}: {reviews: Review[]}) {
  return (
    <StyledBookReview>
        <h2>리뷰</h2>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </StyledBookReview>
  )
}

const StyledBookReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`