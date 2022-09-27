import styled, { css } from 'styled-components'

export const Spinner = styled.div.attrs({
  children: 'Loading...',
})`
  ${({ theme }) => css`
    margin: 0;
    position: relative;
    user-select: none;
    color: transparent;
    transform: translateZ(0);
    border-top: 3px solid ${theme.colors.brand.primary}33;
    border-right: 3px solid ${theme.colors.brand.primary}33;
    border-bottom: 3px solid ${theme.colors.brand.primary}33;
    border-left: 3px solid ${theme.colors.brand.primary};
    animation: load 1100ms infinite linear;

    &,
    &:after {
      border-radius: ${theme.borderRadius.round};
      width: 40px;
      height: 40px;
    }

    @keyframes load {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
