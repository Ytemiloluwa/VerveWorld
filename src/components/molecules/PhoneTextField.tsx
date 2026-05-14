import React from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { Typography, AppTextStyle } from '../atoms/Typography';
import { colors } from '../../theme/colors';
import Svg, { Path, Rect } from 'react-native-svg';
import { styles } from './PhoneTextField.styles';

interface PhoneTextFieldProps extends TextInputProps {
  label: string;
  phoneCode: string;
  onPhoneCodePress?: () => void;
}

export const PhoneTextField = ({
  label,
  phoneCode,
  onPhoneCodePress,
  ...props
}: PhoneTextFieldProps) => {
  return (
    <View style={styles.container}>
      <Typography
        textstyle={AppTextStyle.bodyMedium}
        color={colors.SignUptextPrimary}
        style={styles.label}
      >
        {label}
      </Typography>

      <View style={styles.row}>
        {/* Country Code Selector */}
        <TouchableOpacity
          style={styles.countryCodeBox}
          onPress={onPhoneCodePress}
          activeOpacity={0.8}
        >
          {/* Mock Nigerian Flag */}
          <Svg width="18" height="12" viewBox="0 0 18 12">
            <Rect width="6" height="12" fill={colors.flagGreen} />
            <Rect x="6" width="6" height="12" fill="#FFFFFF" />
            <Rect x="12" width="6" height="12" fill={colors.flagGreen} />
          </Svg>

          <Typography
            textstyle={AppTextStyle.bodyMedium}
            color={colors.textSecondary}
          >
            {phoneCode}
          </Typography>

          {/* Caret Down */}
          <Svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <Path
              d="M1 1L5 5L9 1"
              stroke={colors.SignUptextDescription}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        {/* Phone Input Box */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={colors.placeholderTextColor}
            keyboardType="phone-pad"
            {...props}
          />
        </View>
      </View>
    </View>
  );
};
