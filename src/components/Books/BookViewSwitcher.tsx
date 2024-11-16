import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import { FaList, FaThLarge } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { QUERY_STRING } from "../../constants/queryString";

const viewOptions = [
  {
    label: "list",
    icon: <FaList />,
  },
  {
    label: "card",
    icon: <FaThLarge />,
  },
] 

export type ViewMode = 'card' | 'list'

export default function BookViewSwitcher() {
  const [searchParams, setSearchParms] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams)

    newSearchParams.set(QUERY_STRING.VIEW, value )
    setSearchParms(newSearchParams)
  }

  useEffect(() => {
    if(!searchParams.get(QUERY_STRING.VIEW)) {
        handleSwitch(viewOptions[1].label as ViewMode)
    }
  }, [])

  const view = searchParams.get(QUERY_STRING.VIEW)
  return (
    <BookViewSwitcherContainer>
      {viewOptions.map((option) => {
        return (
          <Button
            className="view-button"
            onClick={() => handleSwitch(option.label as ViewMode)}
            size="sm"
            scheme={view === option.label ? 'primary' : 'secondary'}
            key={option.label}
          >
            {option.icon}
          </Button>
        );
      })}
    </BookViewSwitcherContainer>
  );
}

const BookViewSwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    fill: white;
    margin: 0, 12px;
  }
`
