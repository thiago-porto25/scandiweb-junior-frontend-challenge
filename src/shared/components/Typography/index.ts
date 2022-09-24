import styled, { css, CSSProperties } from 'styled-components'
import { theme } from '../../../styles/theme'

interface ITypographyProps {
  textStyle: keyof typeof theme.textStyles
  fontWeight?: CSSProperties['fontWeight']
  textAlign?: CSSProperties['textAlign']
}

export const Typography = styled.p<ITypographyProps>`
  ${({ theme, textStyle, fontWeight, textAlign }) => css`
    ${theme.textStyles[textStyle]}
    font-weight: ${fontWeight};
    text-align: ${textAlign};
  `}
`
