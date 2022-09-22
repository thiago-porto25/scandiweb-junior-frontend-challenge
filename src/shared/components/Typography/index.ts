import styled, { css, CSSProperties } from 'styled-components'
import { theme } from '../../../styles/theme'

interface ITypographyProps {
  textStyle: keyof typeof theme.textStyles
  fontWeight?: CSSProperties['fontWeight']
}

export const Typography = styled.p<ITypographyProps>`
  ${({ theme, textStyle, fontWeight }) => css`
    ${theme.textStyles[textStyle]}
    font-weight: ${fontWeight};
  `}
`
