import { RootState } from '../../../store';

export const selectSignupForm = (state: RootState) => state.auth.signupForm;
