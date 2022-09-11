import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

interface ITypographyProps {
  textStyle: keyof typeof theme.textStyles
}

export const Typography = styled.p<ITypographyProps>`
  ${({ theme, textStyle }) => css`
    ${theme.textStyles[textStyle]}
  `}
`
