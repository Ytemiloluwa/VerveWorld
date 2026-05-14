import React from 'react';
import { View } from 'react-native';
import { Typography, AppTextStyle } from '../atoms/Typography';
import { colors } from '../../theme/colors';
import Svg, { Path } from 'react-native-svg';
import { styles } from './PasswordRequirements.styles';

interface PasswordRequirementsProps {
  password?: string;
}

const requirementsList = [
  { id: 'lower', label: '1 lower case letter', test: (p: string) => /[a-z]/.test(p) },
  { id: 'upper', label: '1 upper case letter', test: (p: string) => /[A-Z]/.test(p) },
  { id: 'special', label: '1 special character', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
  { id: 'number', label: '1 number', test: (p: string) => /[0-9]/.test(p) },
  { id: 'length', label: '8 characters minimum', test: (p: string) => p.length >= 8 },
];

export const PasswordRequirements = ({ password = '' }: PasswordRequirementsProps) => {
  return (
    <View style={styles.container}>
      <Typography
        textstyle={AppTextStyle.bodyMediumBold}
        color={colors.SignUptextDescription}
        style={styles.title}
      >
        Passwords must contain at least:
      </Typography>
      
      <View style={styles.pillContainer}>
        {requirementsList.map((req) => {
          const isMet = req.test(password);
          return (
            <View
              key={req.id}
              style={[
                styles.pill,
                isMet ? styles.pillMet : styles.pillUnmet,
              ]}
            >
              <Svg width="12" height="12" viewBox="0 0 14 10" fill="none">
                <Path
                  d="M1 5L4.5 8.5L13 1"
                  stroke={isMet ? colors.passwordMetText : colors.passwordUnmetText}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Typography
                textstyle={AppTextStyle.bodyMedium}
                color={isMet ? colors.passwordMetText : colors.passwordUnmetText}
                style={styles.pillText}
              >
                {req.label}
              </Typography>
            </View>
          );
        })}
      </View>
    </View>
  );
};
