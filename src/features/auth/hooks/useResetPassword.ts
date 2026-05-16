import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useResetPassword = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    // Navigate to confirmation or handle API call
    console.log('Reset password for', email);
  };

  return {
    email,
    setEmail,
    handleGoBack,
    handleContinue,
  };
};
