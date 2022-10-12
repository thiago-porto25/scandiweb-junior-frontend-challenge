import styled from 'styled-components'
import { applyCustomScrollbar } from '../../../../shared/helpers'

export const ProductImagesDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  column-gap: 40px;
`

export const ImagesList = styled.ul`
  overflow-y: auto;
  max-height: 500px;
  ${({ theme }) => applyCustomScrollbar(theme)}

  @media (max-width: 450px) {
    max-height: 400px;
  }

  li {
    margin-bottom: 32px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

export const FocusedImageContainer = styled.div``

export const FocusedImage = styled.img`
  width: 100%;
  max-height: 610px;
  object-fit: contain;
`

export const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`
