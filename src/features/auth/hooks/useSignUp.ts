import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateSignupForm } from '../authSlice';
import { selectSignupForm } from '../selectors/authSelectors';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const formState = useSelector(selectSignupForm);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  const handleUpdateForm = (field: string, value: string) => {
    dispatch(updateSignupForm({ [field]: value }));
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  
  const handleToggleAge = () => setIsAgeConfirmed(!isAgeConfirmed);
  const handleToggleTerms = () => setIsTermsAgreed(!isTermsAgreed);

  const handleLoginNav = () => navigation.navigate('Login');
  const handleContinue = () => {
    // Implement continue logic
  };

  return {
    formState,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    isAgeConfirmed,
    isTermsAgreed,
    setPassword,
    setConfirmPassword,
    handleUpdateForm,
    handleTogglePassword,
    handleToggleConfirmPassword,
    handleToggleAge,
    handleToggleTerms,
    handleLoginNav,
    handleContinue,
  };
};
