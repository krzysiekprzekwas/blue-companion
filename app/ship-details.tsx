import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; // Full width minus padding

export default function ShipDetailsScreen() {
  const { name, type } = useLocalSearchParams<{ name: string; type: string }>();

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
              source={{ uri: 'https://placehold.co/600x400/1D3D47/FFFFFF/png?text=Port+Side' }}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Starboard Side (Right)</ThemedText>
            <Image
              source={{ uri: 'https://placehold.co/600x400/1D3D47/FFFFFF/png?text=Starboard+Side' }}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Stern (Back)</ThemedText>
            <Image
              source={{ uri: 'https://placehold.co/600x400/1D3D47/FFFFFF/png?text=Stern' }}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <ThemedText type="subtitle">Bow (Front)</ThemedText>
            <Image
              source={{ uri: 'https://placehold.co/600x400/1D3D47/FFFFFF/png?text=Bow' }}
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