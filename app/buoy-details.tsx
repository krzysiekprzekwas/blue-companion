import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; // Full width minus padding

export default function BuoyDetailsScreen() {
  const { name, description } = useLocalSearchParams<{ name: string; description: string }>();

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
            <Image
              source={{ uri: `https://placehold.co/600x600/1D3D47/FFFFFF/png?text=${name}` }}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
          <ThemedView style={styles.infoContainer}>
            <ThemedText type="subtitle">Description</ThemedText>
            <ThemedText>{description}</ThemedText>
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
    alignItems: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 12,
  },
  infoContainer: {
    gap: 8,
  },
}); 