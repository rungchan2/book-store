import { styled } from "styled-components";
import { TButtonScheme, TButtonSize } from "../styles/theme";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: TButtonSize;
  scheme: TButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  type,
  ...props
}: Props) {
  return (
    <SButton
      size={size}
      scheme={scheme}
      disabled={disabled}
      isLoading={isLoading}
      type={type}
      {...props}
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
