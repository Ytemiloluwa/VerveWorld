import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SignUpbackground,
  },
  content: {
    flex: 1,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FDEAE9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleGroup: {
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },
  form: {
    gap: spacing.md,
  },
  actionRow: {
    marginTop: spacing.xl,
  },
  continueBtn: {
    width: '100%',
  },
  continueBtnActive: {
    backgroundColor: colors.SignUp,
  },
  continueBtnInactive: {
    backgroundColor: colors.buttonSecondary,
  },
});
