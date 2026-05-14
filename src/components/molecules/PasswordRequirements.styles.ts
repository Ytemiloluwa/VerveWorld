import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  title: {
    fontSize: 13,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: 16,
    gap: 6,
  },
  pillMet: {
    backgroundColor: colors.passwordMetBg,
  },
  pillUnmet: {
    backgroundColor: colors.passwordUnmetBg,
  },
  pillText: {
    fontSize: 12,
  },
});
