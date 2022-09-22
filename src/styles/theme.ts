import {
  lineHeight,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
} from './tokens'

export const theme = {
  lineHeight,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  textStyles: {
    categoryHeading: {
      fontFamily: fontFamily.primary,
      fontWeight: 400,
      fontSize: fontSize.xxl,
      lineHeight: lineHeight.xxl,
    },

    category: {
      fontFamily: fontFamily.primary,
      fontWeight: 400,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.lg,
    },

    priceRegular: {
      // also works on currencySwitch
      fontFamily: fontFamily.primary,
      fontWeight: 500,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.xxl,
    },

    priceLarge: {
      fontFamily: fontFamily.primary,
      fontWeight: 700,
      fontSize: fontSize.md,
      lineHeight: lineHeight.xs,
    },

    priceSmall: {
      // also works for quantitySmall
      fontFamily: fontFamily.primary,
      fontWeight: 500, // or 700 for Total
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xxl,
    },

    productTitleRegular: {
      fontFamily: fontFamily.primary,
      fontWeight: 300,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.xxl,
    },

    productTitleSmall: {
      fontFamily: fontFamily.primary,
      fontWeight: 300,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xxl,
    },

    productTitleLarge: {
      fontFamily: fontFamily.primary,
      fontWeight: 400,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.xxs,
    },

    brandName: {
      fontFamily: fontFamily.primary,
      fontWeight: 600,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.xxs,
    },

    cartHeading: {
      fontFamily: fontFamily.primary,
      fontWeight: 700,
      fontSize: fontSize.xl,
      lineHeight: lineHeight.xl,
    },

    attributeNameRegular: {
      fontFamily: fontFamily.secondaryVariant,
      fontWeight: 700,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.xs,
      'text-transform': 'uppercase',
    },

    attributeNameSmall: {
      fontFamily: fontFamily.primary,
      fontWeight: 400,
      fontSize: fontSize.xxs,
      lineHeight: lineHeight.md,
      'text-transform': 'uppercase',
    },

    sizeAttributeRegular: {
      fontFamily: fontFamily.tertiary,
      fontWeight: 400,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.sm,
      letterSpacing: '0.05em',
    },

    sizeAttributeSmall: {
      fontFamily: fontFamily.tertiary,
      fontWeight: 400,
      fontSize: fontSize.xxs,
      lineHeight: lineHeight.xxl,
    },

    productDescription: {
      fontFamily: fontFamily.secondary,
      fontWeight: 400,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xxl,
    },

    quantityRegular: {
      fontFamily: fontFamily.primary,
      fontWeight: 400,
      fontSize: fontSize.xxs,
      lineHeight: lineHeight.md,
    },

    badge: {
      fontFamily: fontFamily.secondary,
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: lineHeight.lg,
    },

    totalSmall: {
      fontFamily: fontFamily.secondary,
      fontWeight: 500,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.sm,
    },

    buttonRegular: {
      fontFamily: fontFamily.primary,
      fontWeight: 600,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.lg,
      color: '#FFFFFF', // black when variant is secondary
    },

    buttonSmall: {
      fontFamily: fontFamily.primary,
      fontWeight: 600,
      fontSize: fontSize.xxs,
      lineHeight: lineHeight.lg,
      color: '#FFFFFF', // black when variant is secondary
    },
  },
}
