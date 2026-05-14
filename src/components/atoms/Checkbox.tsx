import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Typography, AppTextStyle } from './Typography';
import { colors } from '../../theme/colors';
import Svg, { Path } from 'react-native-svg';
import { styles } from './Checkbox.styles';

interface CheckboxProps {
  label: string | React.ReactNode;
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox = ({ label, checked, onToggle }: CheckboxProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={[styles.box, checked ? styles.checkedBox : styles.uncheckedBox]}>
        {checked && (
          <Svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <Path
              d="M1 5L4.5 8.5L13 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
      </View>
      <View style={styles.labelContainer}>
        {typeof label === 'string' ? (
          <Typography
            textstyle={AppTextStyle.bodyMedium}
            color={colors.SignUptextDescription}
          >
            {label}
          </Typography>
        ) : (
          label
        )}
      </View>
    </TouchableOpacity>
  );
};
