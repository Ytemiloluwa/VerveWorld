import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Typography, AppTextStyle } from '../../../components/atoms/Typography';
import { TextField } from '../../../components/atoms/TextField';
import { PhoneTextField } from '../../../components/molecules/PhoneTextField';
import { PasswordRequirements } from '../../../components/molecules/PasswordRequirements';
import { Checkbox } from '../../../components/atoms/Checkbox';
import { Button } from '../../../components/atoms/Button';
import { colors } from '../../../theme/colors';
import VerveLogo from '../../../assets/svgs/SignUpBrands.svg';
import { useSignUp } from '../hooks/useSignUp';
import { styles } from './SignUpScreen.styles';

const SignUpScreen = () => {
  const {
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
  } = useSignUp();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          <VerveLogo width={70} height={24} style={styles.logo} />

          <View style={styles.titleGroup}>
            <Typography
              textstyle={AppTextStyle.heading6}
              color={colors.SignUptextPrimary}
            >
              Sign Up
            </Typography>
            <View style={styles.subtitleRow}>
              <Typography
                textstyle={AppTextStyle.bodyMedium}
                color={colors.SignUptextDescription}
              >
                Already have an account?{' '}
              </Typography>
              <TouchableOpacity onPress={handleLoginNav}>
                <Typography
                  textstyle={AppTextStyle.bodyMediumBold}
                  color={colors.SignUp}
                >
                  Log In
                </Typography>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.form}>
            <TextField
              label="Email Address"
              textColor={colors.textSecondary}
              placeholder="Johndoe@email.com"
              keyboardType="email-address"
              value={formState.email}
              onChangeText={(text) => handleUpdateForm('email', text)}
            />

            <TextField
              label="Full Name"
              textColor={colors.textSecondary}
              placeholder="John Doe"
              value={formState.fullName}
              onChangeText={(text) => handleUpdateForm('fullName', text)}
            />

            <PhoneTextField
              label="Phone Number"
              phoneCode={formState.phoneCode}
              placeholder="07067862300"
              value={formState.phoneNumber}
              onChangeText={(text) => handleUpdateForm('phoneNumber', text)}
            />

            <TextField
              label="Password"
              textColor={colors.textSecondary}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              isPassword
              onToggleVisibility={handleTogglePassword}
              value={password}
              onChangeText={setPassword}
            />

            <TextField
              label="Password"
              textColor={colors.textSecondary}
              placeholder="••••••••"
              secureTextEntry={!showConfirmPassword}
              isPassword
              onToggleVisibility={handleToggleConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.requirementsSection}>
            <PasswordRequirements password={password} />
          </View>

          <View style={styles.checkboxGroup}>
            <Checkbox
              label="By checking this box, I confirm that I am 13+ and eligible to sign up."
              checked={isAgeConfirmed}
              onToggle={handleToggleAge}
            />
            <Checkbox
              label="I agree to Verve's Terms of Service & Privacy Policy"
              checked={isTermsAgreed}
              onToggle={handleToggleTerms}
            />
          </View>

          <View style={styles.actionRow}>
            <Button
              title="Continue"
              variant="primary"
              onPress={handleContinue}
              style={styles.continueBtn}
              textColor="#FFFFFF"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;