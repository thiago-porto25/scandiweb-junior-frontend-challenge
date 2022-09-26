import styled, { css } from 'styled-components'

export const ToastContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.brand.primary};
    color: ${theme.colors.neutral.light};
    border-radius: ${theme.borderRadius.container};
    padding: 16px;
    position: fixed;
    z-index: 999;
    top: 16px;
    right: 16px;
    animation: init 150ms ease;

    @keyframes init {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`
