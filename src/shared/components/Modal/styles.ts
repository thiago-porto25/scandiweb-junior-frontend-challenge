import styled, { css } from 'styled-components'

interface IModalOverlayProps {
  overlayTopMargin: number
}

export const ModalOverlay = styled.div<IModalOverlayProps>`
  ${({ theme, overlayTopMargin }) => css`
    position: relative;
    width: 100%;
    min-height: calc(100% - ${overlayTopMargin}px);
    background-color: ${theme.colors.neutral.overlay};
    animation: fade 300ms ease;
    margin-top: ${overlayTopMargin}px;

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
