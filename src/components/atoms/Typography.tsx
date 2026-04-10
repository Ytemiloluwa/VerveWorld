import React from 'react';
import { ColorValue, Text, TextProps, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export enum AppTextStyle {
  heading5,
  bodyMediumBold,
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
  [AppTextStyle.bodyMediumBold]: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
});
