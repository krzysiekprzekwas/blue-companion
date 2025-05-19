import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; 

const getShipFrontImage = (shipId: string, side: string = 'top') => {
  const shipImages: Record<string, Record<string, any>> = {
    'power-small': {
      'top': require('@/assets/images/power-small-front.png'),
      'front': require('@/assets/images/power-small-front.png'),
      'back': require('@/assets/images/power-small-back.png'),
      'right': require('@/assets/images/power-small-right.png'),
      'left': require('@/assets/images/power-small-left.png'),
    }
  };
  
  return shipImages[shipId]?.[side] || require('@/assets/images/power-small.png');
};

export default function ShipDetailsScreen() {
  const { name, id } = useLocalSearchParams<{ name: string; id: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: name,
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Port Side (Left)</ThemedText>
            <Image
              source={getShipFrontImage(id, 'left')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Starboard Side (Right)</ThemedText>
            <Image
              source={getShipFrontImage(id, 'right')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Stern (Back)</ThemedText>
            <Image
              source={getShipFrontImage(id, 'back')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Bow (Front)</ThemedText>
            <Image
              source={getShipFrontImage(id, 'front')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: 24,
    paddingBottom: 20,
  },
  imageContainer: {
    gap: 8,
  },
  image: {
    width: imageSize,
    height: imageSize * 0.6,
    borderRadius: 12,
  },
}); 