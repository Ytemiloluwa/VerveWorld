import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  countryCodeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 48,
    paddingHorizontal: spacing.sm,
    gap: spacing.xs,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 48,
    paddingHorizontal: spacing.sm,
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: 'Averta',
    padding: 0,
  },
});
