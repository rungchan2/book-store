import styled from "styled-components";
import { Review } from "@/types/book.type";
import ReviewItem from "../Book/ReviewItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";
interface IProps {
  reviews: Review[];
}

export function MainReviews({ reviews }: IProps) {

  const {isMobile} = useMediaQuery();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    gap: 10,
    accessibility: true,
  };

  return (
    <StyledMainReviews>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </Slider>
    </StyledMainReviews>
  );
}

const StyledMainReviews = styled.div`
  width: 100%;

  .slick-arrow::before {
    color: ${({ theme }) => theme.color.primary};
    font-size: 24px;

  }

  .slick-track {
    display: flex;
    gap: 10px;
  }

  .slick-slide {
    padding: 0 10px;
  }



  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
      .slick-track {
        gap: 0;
      }

      .slick-prev {
        left: 0;
      }
      .slick-next {
        right: 0;
      }
    }
`;
