import styled, { css } from 'styled-components'

interface IProductCardContainerProps {
  isOutOfStock: boolean
}

interface IProductCardImageContainerProps {
  isOutOfStock: boolean
}

export const ProductCardContainer = styled.li<IProductCardContainerProps>`
  ${({ theme, isOutOfStock }) => css`
    position: relative;
    transition: box-shadow 0.13s ease;

    .add-to-cart-btn-container {
      position: absolute;
      z-index: 1;
      bottom: 72px;
      right: 32px;
      width: 52px;
      height: 52px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: visibility 0.13s ease, opacity 0.13s ease;

      @media (max-width: 620px) {
        visibility: visible;
        pointer-events: all;
        opacity: 1;
      }

      svg {
        width: 24px;
        height: 22px;
        path {
          fill: ${theme.colors.neutral.light};
        }
      }
    }

    a {
      color: ${theme.colors.neutral.dark};
      display: block;
      padding: 16px;
    }

    &:hover {
      box-shadow: ${theme.boxShadow.regular};

      .add-to-cart-btn-container {
        visibility: visible;
        pointer-events: all;
        opacity: 1;
      }
    }

    ${isOutOfStock &&
    css`
      opacity: 0.5;
      pointer-events: none;
      user-select: none;

      ::after {
      }
    `}
  `}
`

export const ProductCardImageContainer = styled.div<IProductCardImageContainerProps>`
  ${({ theme, isOutOfStock }) => css`
    position: relative;

    ${isOutOfStock &&
    css`
      ::after {
        content: 'OUT OF STOCK';
        display: block;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        color: ${theme.colors.neutral.dark};
        font-size: ${theme.fontSize.md};
        font-weight: 400;
        line-height: ${theme.lineHeight.xxl};
        font-family: ${theme.fontFamily.primary};
      }
    `}
  `}
`

export const ProductCardImage = styled.img`
  width: 354px;
  max-width: 354px;
  max-height: 330px;
  height: 330px;
  object-fit: contain;

  @media (max-width: 620px) {
    width: 100%;
  }
`

export const ProductCardInfoContainer = styled.div`
  margin-top: 16px;
`
