import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: 'outlined'
  width?: string
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, width, variant }) => {
    return css`
      padding: 0.9rem;
      width: ${width || '100%'};
      border-radius: 10px;

      font-size: 1rem;

      border: 1px solid
        ${variant === 'outlined' ? theme.colors.black : 'transparent'};
      background-color: ${variant === 'outlined'
        ? 'transparent'
        : theme.colors.black};
      color: ${variant === 'outlined'
        ? theme.colors.black
        : theme.colors.white};

      &:not(:disabled):hover {
        filter: ${variant === 'outlined' ? 'opacity(0.5)' : 'opacity(0.8)'};
        transition: all 0.3s ease-in-out;
      }

      &:disabled {
        opacity: 0.5;
        &:hover {
          cursor: not-allowed;
        }
      }
    `
  }};
`
