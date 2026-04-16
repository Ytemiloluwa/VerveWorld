import React from 'react';
import { ColorValue, Text, TextProps, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export enum AppTextStyle {
  heading5,
  heading6,
  bodyMedium,
  bodyMediumBold,
  link,
}

type Props = TextProps & {
  textstyle?: AppTextStyle;
  color?: ColorValue;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

export const Typography = ({
  textstyle = AppTextStyle.bodyMediumBold,
  style,
  color = colors.textPrimary,
  textAlign,
  ...props
}: Props) => {
  return (
    <Text style={[styles[textstyle], { color, textAlign }, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  [AppTextStyle.heading5]: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36,
  },
  [AppTextStyle.heading6]: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0,
  },

  [AppTextStyle.bodyMedium]: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  [AppTextStyle.bodyMediumBold]: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  [AppTextStyle.link]: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
});
