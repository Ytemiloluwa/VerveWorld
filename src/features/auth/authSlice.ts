import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
  } | null;
  signupForm: {
    email: string;
    fullName: string;
    phoneCode: string;
    phoneNumber: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  signupForm: {
    email: '',
    fullName: '',
    phoneCode: '+234',
    phoneNumber: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateSignupForm: (
      state,
      action: PayloadAction<Partial<AuthState['signupForm']>>
    ) => {
      state.signupForm = { ...state.signupForm, ...action.payload };
    },
  },
});

export const { login, logout, updateSignupForm } = authSlice.actions;

export default authSlice.reducer;
