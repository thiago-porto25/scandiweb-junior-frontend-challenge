import styled, { css } from 'styled-components'

interface IChevronContainerProps {
  shouldRotate: boolean
}

interface ICurrencyOptionProps {
  isSelected: boolean
}

export const CurrencySwitcherContainer = styled.div`
  position: relative;
`

export const ToggleCurrencySwitcher = styled.button`
  ${({ theme }) => css`
    width: 38px;
    height: 38px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 130ms ease;

    &:hover {
      color: ${theme.colors.neutral.dark}dd;

      path {
        stroke: ${theme.colors.neutral.dark}dd;
      }
    }
  `}
`

export const CurrencyList = styled.ul`
  width: 114px;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  position: absolute;
  top: 38px;
  left: -18px;

  @media (max-width: 1400px) {
    left: auto;
    right: 0px;
  }
`

export const ChevronContainer = styled.div<IChevronContainerProps>`
  transform: rotate(
    ${({ shouldRotate }) => (shouldRotate ? '180deg' : '0deg')}
  );
  transition: transform 130ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

export const CurrencyOption = styled.button<ICurrencyOptionProps>`
  ${({ theme, isSelected }) => css`
    background: ${isSelected
      ? theme.colors.neutral.highlight
      : theme.colors.neutral.light};
    border: none;
    cursor: pointer;
    width: 100%;
    height: 45px;
    text-align: left;
    padding: 0 20px;

    &:hover {
      background: ${theme.colors.neutral.highlight};
    }
  `}
`
