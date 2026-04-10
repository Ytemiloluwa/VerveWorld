import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '../atoms/Typography';
import { colors } from '../../theme/colors';

export const LegalFooter = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Typography style={styles.underline}>Terms of Service</Typography>
    </TouchableOpacity>
    <View style={styles.ellipse} />
    <TouchableOpacity>
      <Typography style={styles.underline}>Privacy Policy</Typography>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  ellipse: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textPrimary,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
