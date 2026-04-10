import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Button } from '../components/atoms/Button';
import { LegalFooter } from '../components/molecules/LegalFooter';
import { WelcomeCarousel } from '../components/organisms/WelcomeCarousel';
import VerveLogo from '../assets/images/brands.svg';

const carouselData = [
  'Enjoy Rewards Everytime You Transact With Verve',
  'Stay in Control of All Your Verve Cards',
];

const images = [
  require('../assets/images/VerveImageOne.jpg'),
  require('../assets/images/VerveImageTwo.jpg'),
];

const WelcomeScreen = ({ navigation }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      {/* 1. Background Image */}
      <ImageBackground
        source={images[activeIndex]}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />

      {/* 2. Gradient Layer */}
      <LinearGradient
        colors={[
          colors.gradientTransparent,
          colors.gradientMid,
          colors.background,
        ]}
        locations={[0, 0.476, 1]}
        style={StyleSheet.absoluteFill}
      />

      <VerveLogo width={50} height={17} style={styles.logo} />

      {/* 4. Content Layer */}
      <View style={styles.mainContainer}>
        <WelcomeCarousel
          data={carouselData}
          activeIndex={activeIndex}
          onIndexChange={setActiveIndex}
        />

        <View style={styles.buttonGroup}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
          />
          <Button
            title="Login"
            variant="outline"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <LegalFooter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logo: {
    position: 'absolute',
    width: 50,
    height: 17,
    top: 44,
    left: 162,
    zIndex: 10,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    justifyContent: 'flex-end',
  },
  buttonGroup: {
    gap: spacing.md,
    marginTop: 32, 
    marginBottom: spacing.xl,
  },
});

export default WelcomeScreen;
