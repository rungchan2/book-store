import { styled } from "styled-components";
import { TButtonScheme, TButtonSize } from "../style/theme";

interface Props {
  children: React.ReactNode;
  size: TButtonSize;
  scheme: TButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  size,
  scheme,
  disabled,
  isLoading,
}: Props) {
  return (
    <SButton
      size={size}
      scheme={scheme}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </SButton>
  );
}

const SButton = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  border: 0;
  border-radius: ${({ theme, size }) => theme.button[size].borderRadius};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
