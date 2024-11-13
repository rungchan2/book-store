import React from 'react'
import { styled } from 'styled-components'
import { HeadingSize } from '../style/theme'
type Props = {
    children: React.ReactNode;
    size: HeadingSize;
    color: string;
}

export default function Title({ children, size, color }: Props) {
  return (
    <Heading size={size} color={color}>{children}</Heading>
  )
}

const Heading = styled.h1<Omit<Props, 'children'>>`
    font-size: ${({ theme, size }) => theme.heading[size]};
    color: ${({ color }) => color};
`;
