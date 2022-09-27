import styled, { css } from 'styled-components'

import { applyCustomScrollbar } from '../../../../shared/helpers'

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

export const CartModalContentContainer = styled.div`
  ${({ theme }) => css`
    max-height: 80%;
    overflow-y: auto;
    position: absolute;
    background-color: ${theme.colors.neutral.light};
    width: 340px;
    padding: 32px 16px;
    right: 15%;
    ${applyCustomScrollbar(theme)}

    @media (max-width: 1600px) {
      right: 10%;
    }

    @media (max-width: 1440px) {
      right: 5%;
    }

    @media (max-width: 620px) {
      width: 70%;
      right: calc(50% - 35%);
    }

    @media (max-width: 450px) {
      width: 90%;
      right: calc(50% - 45%);
    }
  `}
`

export const ItemsList = styled.ul`
  margin-top: 32px;
  margin-bottom: 43px;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const ButtonsContainer = styled.div`
  height: 43px;
  display: flex;
  column-gap: 12px;
`
