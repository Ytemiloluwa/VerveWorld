import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SignUpbackground,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  content: {
    paddingTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
  logo: {
    marginBottom: spacing.lg,
  },
  titleGroup: {
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    gap: spacing.md,
  },
  requirementsSection: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  checkboxGroup: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueBtn: {
    flex: 1,
    backgroundColor: colors.SignUp,
  },
});
