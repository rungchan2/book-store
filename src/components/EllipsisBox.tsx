import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";

interface EllipsisBoxProps {
  children: React.ReactNode;
  lineLimit: number;
  expand?: boolean;
}

export default function EllipsisBox({ children, lineLimit }: EllipsisBoxProps) {
  const [expand, setExpand] = useState(false);

  return (
    <StyledEllipsisBox expand={expand} lineLimit={lineLimit}>
      <p>{children}</p>
      <Button
        scheme="primary"
        size="sm"
        onClick={() => setExpand(!expand)}
        className="expand-button"
      >
        {expand ? "간략히" : "자세히"}
      </Button>
    </StyledEllipsisBox>
  );
}

const StyledEllipsisBox = styled.div<EllipsisBoxProps>`
  position: relative;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ lineLimit, expand }) =>
      expand ? "none" : lineLimit};
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
  }
  .expand-button {
    position: absolute;
    bottom: -15;
    right: 0;
  }
`;
