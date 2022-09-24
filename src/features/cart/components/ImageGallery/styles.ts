import styled, { css } from 'styled-components'

interface IImageGalleryContainerProps {
  isSmall?: boolean
}

export const ImageGalleryContainer = styled.div<IImageGalleryContainerProps>`
  ${({ isSmall }) => css`
    position: relative;
    width: ${isSmall ? '121px' : '200px'};
    height: ${isSmall ? '190px' : '288px'};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const GalleryButtonsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  column-gap: 8px;
`

export const GalleryButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.neutral.dark}BA;
    color: ${theme.colors.neutral.light};
    font-size: ${theme.fontSize.xs};
    border: none;
    outline: none;
    transition: background-color 0.13ms ease;

    &:hover {
      background-color: ${theme.colors.neutral.dark};
    }
  `}
`
