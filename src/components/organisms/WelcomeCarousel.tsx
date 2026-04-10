import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Typography, AppTextStyle } from '../atoms/Typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const { width } = Dimensions.get('window');

interface Props {
  data: string[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export const WelcomeCarousel = ({
  data,
  activeIndex,
  onIndexChange,
}: Props) => {
  return (
    <View>
      {/* Carousel Indicators */}
      <View style={styles.indicatorRow}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              activeIndex === i
                ? styles.indicatorActive
                : styles.indicatorInactive,
            ]}
          />
        ))}
      </View>

      {/* Text Carousel below indicators */}
      <Carousel
        loop
        width={width - 48}
        height={100}
        autoPlay
        autoPlayInterval={3000}
        data={data}
        onSnapToItem={onIndexChange}
        renderItem={({ item }) => (
          <Typography textstyle={AppTextStyle.heading5}>{item}</Typography>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: 36,
  },
  indicator: {
    width: 32,
    height: 4,
    borderRadius: 2,
  },
  indicatorActive: {
    backgroundColor: colors.primary,
  },
  indicatorInactive: {
    backgroundColor: colors.white50,
  },
});
