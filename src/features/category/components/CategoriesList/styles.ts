import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${({ theme }) => css`
    height: 52px;
    display: flex;
    column-gap: 16px;

    li {
      height: inherit;
    }

    .category-item {
      height: inherit;
      display: flex;
      padding: 16px;
      color: ${theme.colors.neutral.dark};
      text-transform: uppercase;

      &:hover {
        background-color: ${theme.colors.neutral.highlight};
      }
    }

    .category-item.activated {
      color: green;
      border-bottom: 2px solid ${theme.colors.brand.primary};

      > p {
        font-weight: 600;
      }
    }
  `}
`
