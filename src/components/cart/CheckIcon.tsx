import React from 'react'
import styled from 'styled-components'
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

interface CheckIconProps {
  isChecked: boolean;
  onCheck: () => void;
}

export default function CheckIcon({ isChecked, onCheck }: CheckIconProps) {
  return (
    <StyledCheckIcon onClick={onCheck}>
      {
        isChecked ? <FaRegCheckCircle /> : <FaRegCircle />
      }
    </StyledCheckIcon>
  )
}

const StyledCheckIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;