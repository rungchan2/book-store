import { styled } from "styled-components";
import { useState } from "react";
import React from "react";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

function Tab({ title, children }: TabProps) {
  return <StyledTab>{children}</StyledTab>;
}

function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  console.log(tabs);

  return (
    <StyledContainer>

      <div className="tab-button">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {tab.props.title}
            </button>
          ))}
      </div>

      <div className="tab-content">{tabs[activeIndex]}</div>
    </StyledContainer>
  );
}

export { Tab, Tabs };

const StyledContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .tab-button {
    display: flex;
    border-bottom: 1px solid #ddd;

    button {
        background-color: transparent;
        border: none;
        padding: 12px 24px;
        color: ${({ theme }) => theme.color.gray};

      &:hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.surface};
        transition: all 0.3s ease;
      }
    }

    .active {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.surface};
    }
  }

  
`;

const StyledTab = styled.div`
  display: flex-start;
  align-items: center;
  justify-content: center;
`;
