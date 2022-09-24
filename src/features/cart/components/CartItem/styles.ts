import styled, { css } from 'styled-components'

interface ICommonProps {
  isSmall?: boolean
}

export const CartItemContainer = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    display: flex;
    justify-content: space-between;
    column-gap: ${isSmall ? '20px' : '0'};
    margin: ${isSmall ? '0' : '24px'} 0;
    margin-bottom: ${isSmall ? '40px' : '24px'};

    h2 > span {
      display: block;
      margin-top: ${isSmall ? '0' : '16px'};
      margin-bottom: ${isSmall ? '4px' : '20px'};
    }
  `}
`

export const LeftContainer = styled.div``

export const RightContainer = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    display: flex;
    column-gap: ${isSmall ? '8px' : '24px'};
  `}
`

export const AttributeList = styled.ul<ICommonProps>`
  ${({ isSmall }) => css`
    margin-top: ${isSmall ? '8px' : '20px'};

    > li {
      margin-bottom: ${isSmall ? '8px' : '16px'};

      :last-child {
        margin-bottom: 0;
      }
    }
  `}
`

export const QuantityContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ButtonContainer = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    width: ${isSmall ? '24px' : '45px'};
    height: ${isSmall ? '24px' : '45px'};
  `}
`

export const Plus = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    height: 100%;
    width: 100%;

    ::after,
    ::before {
      content: '';
      position: absolute;
      top: ${isSmall ? '11px' : '21px'};
      left: ${isSmall ? '7px' : '14px'};
      width: ${isSmall ? '8px' : '15px'};
      height: 1px;
      background-color: ${({ theme }) => theme.colors.neutral.dark};
    }

    ::before {
      transform: rotate(90deg);
    }
  `}
`

export const Minus = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    ::before {
      content: '';
      position: absolute;
      top: ${isSmall ? '11px' : '21px'};
      left: ${isSmall ? '7px' : '14px'};
      width: ${isSmall ? '8px' : '15px'};
      height: 1px;
      background-color: ${({ theme }) => theme.colors.neutral.dark};
    }
  `}
`
