import { css, DefaultTheme } from 'styled-components'

export const applyCustomScrollbar = (theme: DefaultTheme) => {
  const { colors, borderRadius } = theme

  return css`
    scrollbar-color: ${colors.neutral.highlight} ${colors.neutral.light};

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0;
      border-radius: ${borderRadius.container};
    }

    ::-webkit-scrollbar-thumb {
      background: ${colors.neutral.highlight};
      border-radius: ${borderRadius.container};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.neutral.dark}22;
    }
  `
}
