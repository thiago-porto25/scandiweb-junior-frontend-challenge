import styled, { css } from 'styled-components'

export const QuantityBadge = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: -1;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.neutral.dark};
    color: ${theme.colors.neutral.light};
  `}
`
