import React, { ForwardedRef } from 'react'
import styled from 'styled-components'

interface Props {
  placeholder: string;
}

const InputText = React.forwardRef(({placeholder} : Props, ref: ForwardedRef<HTMLInputElement>) => {
  return <SInputText placeholder={placeholder} ref={ref} />;
});

const SInputText = styled.input.attrs({
  type: "text",
})`
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;

export default InputText;
