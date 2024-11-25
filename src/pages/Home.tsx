import { TThemeName } from "../styles/theme";

import styled from "styled-components";
import { MainReviews } from "@/components/main/MainReviews";
import { useMain } from "@/hooks/useMain";
import Title from "@/components/Title";
import NewBooks from "@/components/main/NewBooks";
import { BestSeller } from "@/components/main/BestSeller";
import { Banner } from "@/components/banner/Banner";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface IProps {
  setTheme: (theme: TThemeName) => void;
  theme: TThemeName;
}

export default function Home() {
  const { reviews, bestSeller, bannerList } = useMain();
  const { isMobile } = useMediaQuery();

  console.log("bannerList", bannerList);

  return (
    <StyledHome>
      {/* 배너 */}
      <section>
        <Banner bannerList={bannerList} />
      </section>

      {/* 베스트 셀러 */}
      <section>
        <Title size="lg" color="primary">
          베스트 셀러
        </Title>
        <BestSeller bestSeller={bestSeller} />
      </section>

      {/* 신간 */}
      <section>
        <Title size="lg" color="primary">
          신간
        </Title>
        <NewBooks />
      </section>

      {/* 리뷰 */}
      <section className="reviews">
        <Title size="lg" color="primary">
          리뷰
        </Title>
        <MainReviews reviews={reviews} />
      </section>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .reviews {
    width: 100%;
  }

`;
