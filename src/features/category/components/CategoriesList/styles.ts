import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  height: 100%;
`

export const List = styled.ul`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    column-gap: 16px;

    li {
      height: inherit;
    }

    .category-item {
      height: inherit;
      display: flex;
      align-items: center;
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
