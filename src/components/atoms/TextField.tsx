import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Typography, AppTextStyle } from './Typography';
import { colors } from '../../theme/colors';
import ShowPassword from '../../assets/svgs/showPassword.svg';

interface TextFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  onToggleVisibility?: () => void;
  secureTextEntry?: boolean;
}

export const TextField = ({
  label,
  isPassword,
  onToggleVisibility,
  ...props
}: TextFieldProps) => {
  return (
    <View style={styles.container}>
      <Typography
        textstyle={AppTextStyle.bodyMedium}
        color={colors.SignUptextPrimary}
        style={styles.label}
      >
        {label}
      </Typography>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor= {colors.placeholderTextColor}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={onToggleVisibility}
            style={styles.iconContainer}
          >
            <ShowPassword width={20} height={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontWeight: '400',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 48,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    fontFamily: 'Averta',
  },
  iconContainer: {
    paddingLeft: 8,
  },
});
