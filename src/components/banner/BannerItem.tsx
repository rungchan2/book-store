import styled from "styled-components";
import { Banner as BannerType } from "@/types/banner.type";
export function BannerItem({ banner }: { banner: BannerType }) {
  return (
    <StyledBanner>
      <div className="img">
        <img src={banner.image} alt={banner.title} />
      </div>
      <div className="content">
        <h2>{banner.title}</h2>
        <p>{banner.description}</p>
      </div>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  .img {
    img {
      width: 100%;
      max-width: 100%;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h2 {
      margin: 0;
      color: ${({ theme }) => theme.color.primary};
      font-size: 24px;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.text};
      margin: 0;
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    .content {
      width: 100%;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;
