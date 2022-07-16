import styled, { css } from 'styled-components'

interface InputProps {
  width?: string | number
}

// export

export const Input = styled.input<InputProps>`
  ${({ theme, width }) => {
    return css`
      padding: 1rem;
      width: ${width || '100%'};
      border: none;

      font-size: 1rem;

      background-color: ${theme.colors.gray};
      border-radius: 10px;
    `
  }}
`
