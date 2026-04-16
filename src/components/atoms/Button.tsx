import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Typography, AppTextStyle } from './Typography';
import { colors } from '../../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  style?: ViewStyle;
  textColor?: string;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textColor,
}: ButtonProps) => {
  const isPrimary = variant === 'primary';
  const buttonTextColor = textColor ? textColor : isPrimary ? colors.textSecondary : colors.textPrimary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, isPrimary ? styles.primary : styles.outline, style]}
    >
      <Typography
        color={buttonTextColor}
        textstyle={AppTextStyle.bodyMediumBold}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
