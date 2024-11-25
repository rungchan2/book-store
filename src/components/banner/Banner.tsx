import styled from "styled-components";
import { Banner as BannerType } from "@/types/banner.type";
import { BannerItem } from "./BannerItem";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "@/hooks/useMediaQuery";
export function Banner({ bannerList }: { bannerList: BannerType[] }) {
  const { isMobile } = useMediaQuery();
  const [currentBanner, setCurrentBanner] = useState(0);

  const transForValue = useMemo(() => {
    return `translateX(-${currentBanner * 100}%)`;
  }, [currentBanner]);

  const handlePrevBanner = () => {
    if (currentBanner === 0) {
      setCurrentBanner(bannerList.length - 1);
      return;
    }
    setCurrentBanner(currentBanner - 1);
  };

  const handleNextBanner = () => {
    if (currentBanner === bannerList.length - 1) {
      setCurrentBanner(0);
      return;
    }
    setCurrentBanner(currentBanner + 1);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <StyledBanner>
      <BannerContainerStyle $transForValue={transForValue}>
        {bannerList.map((banner, index) => (
          <BannerItem key={index} banner={banner} />
        ))}
      </BannerContainerStyle>

      <StyledButtonContainer>
        <button onClick={handlePrevBanner}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNextBanner}>
          <FaChevronRight />
        </button>
      </StyledButtonContainer>

      <BannerIndicatorStyle>
        {bannerList.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`${index === currentBanner ? "active" : ""}`}
          ></div>
        ))}
      </BannerIndicatorStyle>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  position: relative;
  overflow: hidden;
`;

const BannerContainerStyle = styled.div<{ $transForValue: string }>`
  display: flex;
  position: relative;
  transform: ${({ $transForValue }) => $transForValue};
  transition: transform 0.5s ease-in-out;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);

  button {
    background-color: ${({ theme }) => theme.color.primary};
    aspect-ratio: 1 / 1;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    svg {
      font-size: 1rem;
      fill: white;
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    button {
      padding: 0.2rem;
    }

    &.prev {
      left: 0;
    }

    &.next {
      right: 0;
    }
  }
`;

const BannerIndicatorStyle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;

  div {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.color.primary};
    cursor: pointer;
    &.active {
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    bottom: 0;
    div {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
`;
