import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface IColorProps {
  colorValue: HTMLAttributes<HTMLButtonElement>['color']
  selected: boolean
  small?: boolean
}

const ColorInner = styled.div.attrs({ className: 'color-inner' })``

export const Color = styled.button.attrs(({ selected }: IColorProps) => ({
  'aria-selected': selected,
  children: <ColorInner />,
}))<IColorProps>`
  ${({ theme, colorValue, selected, small = false }) => css`
    width: ${small ? '20px' : '36px'};
    height: ${small ? '20px' : '36px'};
    padding: 1px;
    background-color: transparent;
    border: 1px solid ${theme.colors.neutral.highlight};
    cursor: pointer;
    transition: opacity 130ms ease;

    &:hover {
      opacity: 0.8;
    }

    ${selected &&
    css`
      border: 1px solid ${theme.colors.brand.primary};
      pointer-events: none;
    `}

    .color-inner {
      width: 100%;
      height: 100%;
      background-color: ${colorValue};
    }
  `}
`
