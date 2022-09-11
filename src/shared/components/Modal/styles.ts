import styled, { css } from 'styled-components'

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: ${theme.colors.neutral.overlay};
    animation: fade 300ms ease;

    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`
