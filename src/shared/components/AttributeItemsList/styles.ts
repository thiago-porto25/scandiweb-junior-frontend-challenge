import styled, { css } from 'styled-components'

interface ICommonProps {
  isSmall?: boolean
}

export const AttributeItemsListContainer = styled.div``

export const List = styled.ul<ICommonProps>`
  ${({ isSmall }) => css`
    display: flex;
    column-gap: ${isSmall ? '8px' : '12px'};
    row-gap: ${isSmall ? '8px' : '12px'};
    margin-top: 8px;
    flex-wrap: wrap;
  `}
`

export const ButtonContainer = styled.div<ICommonProps>`
  ${({ isSmall }) => css`
    button {
      min-width: ${isSmall ? '24px' : '64px'};
      height: ${isSmall ? '24px' : '45px'};
      padding: 0 ${isSmall ? '4px' : '16px'};
    }
  `}
`
