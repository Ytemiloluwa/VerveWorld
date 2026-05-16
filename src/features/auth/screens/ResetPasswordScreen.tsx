import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Typography, AppTextStyle } from '../../../components/atoms/Typography';
import { TextField } from '../../../components/atoms/TextField';
import { Button } from '../../../components/atoms/Button';
import { colors } from '../../../theme/colors';
import ChevronLeft from '../../../assets/svgs/ChevronLeft.svg';
import { useResetPassword } from '../hooks/useResetPassword';
import { styles } from './ResetPasswordScreen.styles';

const ResetPasswordScreen = () => {
  const { email, setEmail, handleGoBack, handleContinue } = useResetPassword();
  const isEmailValid = email.length > 0;
  const continueBtnStyle: StyleProp<ViewStyle> = [
    styles.continueBtn,
    isEmailValid ? styles.continueBtnActive : styles.continueBtnInactive,
  ];
  const continueBtnStyleFlat: ViewStyle = StyleSheet.flatten(continueBtnStyle) as ViewStyle;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <ChevronLeft width={16} height={16} />
            </TouchableOpacity>
          </View>

          <View style={styles.titleGroup}>
            <Typography
              textstyle={AppTextStyle.heading6}
              color={colors.SignUptextPrimary}
            >
              Reset Password
            </Typography>
            <Typography
              textstyle={AppTextStyle.bodyMedium}
              color={colors.SignUptextDescription}
            >
              Provide the details below to reset your password
            </Typography>
          </View>

          <View style={styles.form}>
            <TextField
              label="Email Address"
              textColor={colors.textSecondary}
              placeholder="Eg. Johndoe@email.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.actionRow}>
            <Button
              title="Continue"
              variant="primary"
              onPress={handleContinue}
              style={continueBtnStyleFlat}
              textColor="#FFFFFF"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
