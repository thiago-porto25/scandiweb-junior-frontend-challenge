import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${({ theme }) => css`
    height: 52px;
    display: flex;
    column-gap: 16px;

    li {
      height: inherit;
    }

    .nav-link {
      height: inherit;
      display: flex;
      padding: 0 16px;
      color: ${theme.colors.neutral.dark};
      text-transform: uppercase;
    }

    .nav-link.activated {
      color: green;
      border-bottom: 2px solid ${theme.colors.brand.primary};

      > p {
        font-weight: 600;
      }
    }
  `}
`
