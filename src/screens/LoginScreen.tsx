import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Typography, AppTextStyle } from '../components/atoms/Typography';
import { TextField } from '../components/atoms/TextField';
import { Button } from '../components/atoms/Button';
import { colors } from '../theme/colors';
import VerveLogo from '../assets/svgs/SignUpBrands.svg';
import FaceID from '../assets/svgs/faceID.svg';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Logo */}
        <VerveLogo width={50} height={17}/>

        {/* Title Group */}
        <View style={styles.titleGroup}>
          <Typography
            textstyle={AppTextStyle.heading6}
            color={colors.SignUptextPrimary}
          >
            Log In
          </Typography>
          <Typography
            textstyle={AppTextStyle.bodyMedium}
            color={colors.SignUptextDescription}
          >
            Welcome back
          </Typography>
        </View>

        {/* Form Group */}
        <View style={styles.form}>
          <TextField
            label="Email Address"
            placeholder="Eg. Johndoe@email.com"
            keyboardType="email-address"
          />
          <TextField
            label="Password"
            placeholder="Password"
            secureTextEntry={!showPassword}
            isPassword
            onToggleVisibility={() => setShowPassword(!showPassword)}
          />

          <TouchableOpacity style={styles.forgotBtn}>
            <Typography
              textstyle={AppTextStyle.bodyMedium}
              color={colors.forgotPassword}
              style={styles.forgotButtonWeight}
            >
              Forgot Password?
            </Typography>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <Button
            title="Continue"
            variant="primary"
            onPress={() => {}}
            style={styles.continueBtn}
            textColor={colors.primary}
          />
          <TouchableOpacity style={styles.biometricBtn}>
            <FaceID width={20} height={24} />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Typography
            textstyle={AppTextStyle.bodyMedium}
            color={colors.SignUptextDescription}
          >
            New to Verve App?{' '}
            <Typography
              textstyle={AppTextStyle.link}
              color={colors.SignUp}
              onPress={() => {}}
            >
              Sign Up
            </Typography>
          </Typography>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SignUpbackground,
  },
  content: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 24,
    gap: 24,
  },
  titleGroup: {
    marginTop: 0,
  },
  form: {
    gap: 16,
  },
  forgotBtn: {
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 48,
    gap: 12,
  },
  continueBtn: {
    flex: 1,
    backgroundColor: colors.buttonSecondary,
  },
  biometricBtn: {
    width: 68,
    height: 44,
    borderRadius: 200,
    paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 8,
    backgroundColor: colors.buttonSecondary,
  },
  footer: {
    marginTop: 4,
    alignItems: 'center',
  },
  forgotButtonWeight: {
    fontWeight: '700',
  },
});

export default LoginScreen;
