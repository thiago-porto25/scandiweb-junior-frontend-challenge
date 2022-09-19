import styled, { css } from 'styled-components'

interface IButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  round?: boolean
  smallText?: boolean
  selected?: boolean
  children: React.ReactNode
}

export const Button = styled.button.attrs(({ selected }: IButtonProps) => ({
  'aria-selected': selected,
}))<IButtonProps>`
  ${({
    theme,
    variant = 'primary',
    round = false,
    smallText = false,
    selected = false,
  }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${round ? theme.borderRadius.round : 0};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    outline: none;
    transition: background-color 130ms ease, border-color 130ms ease;
    ${smallText
      ? theme.textStyles.buttonSmall
      : theme.textStyles.buttonRegular};
    background-color: ${theme.colors.brand.primary};
    border: 1px solid ${theme.colors.brand.primary};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      background-color: ${theme.colors.brand.primaryHighlight};
      border: 1px solid ${theme.colors.brand.primaryHighlight};
    }

    ${variant === 'secondary' &&
    css`
      background-color: ${theme.colors.neutral.light};
      border: 1px solid ${theme.colors.neutral.dark};
      color: ${theme.colors.neutral.dark};

      &:hover {
        background-color: ${theme.colors.neutral.dark};
        border: 1px solid ${theme.colors.neutral.dark};
        color: ${theme.colors.neutral.light};
      }

      ${selected &&
      css`
        background-color: ${theme.colors.neutral.dark};
        border: 1px solid ${theme.colors.neutral.dark};
        color: ${theme.colors.neutral.light};
        pointer-events: none;
      `}
    `}

    ${variant === 'ghost' &&
    css`
      background-color: transparent;
      border: none;
      width: auto;
      height: auto;
      padding: 0;

      &:hover {
        background-color: ${theme.colors.neutral.highlight};
        border: none;
      }
    `}
  `}
`
