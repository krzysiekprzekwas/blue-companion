import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; 

const getShipImage = (shipId: string, side: string = 'top') => {
  const shipImages: Record<string, Record<string, any>> = {
    'power-small': {
      'top': require('@/assets/images/ships/power-small.png'),
      'front': require('@/assets/images/ships/power-small-front.png'),
      'back': require('@/assets/images/ships/power-small-back.png'),
      'right': require('@/assets/images/ships/power-small-right.png'),
      'left': require('@/assets/images/ships/power-small-left.png'),
    },
    'power-medium': {
      'top': require('@/assets/images/ships/power-medium.png'),
      'front': require('@/assets/images/ships/power-medium-front.png'),
      'back': require('@/assets/images/ships/power-medium-back.png'),
      'right': require('@/assets/images/ships/power-medium-right.png'),
      'left': require('@/assets/images/ships/power-medium-left.png'),
    },
    'power-large': {
      'top': require('@/assets/images/ships/power-large.png'),
      'front': require('@/assets/images/ships/power-large-front.png'),
      'back': require('@/assets/images/ships/power-large-back.png'),
      'right': require('@/assets/images/ships/power-large-right.png'),
      'left': require('@/assets/images/ships/power-large-left.png'),
    }
  };
  
  return shipImages[shipId]?.[side] || require('@/assets/images/ships/power-small.png');
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
          <ThemedText type="title">{name}</ThemedText>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Port Side (Left)</ThemedText>
            <Image
              source={getShipImage(id, 'left')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Starboard Side (Right)</ThemedText>
            <Image
              source={getShipImage(id, 'right')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Stern (Back)</ThemedText>
            <Image
              source={getShipImage(id, 'back')}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Bow (Front)</ThemedText>
            <Image
              source={getShipImage(id, 'front')}
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