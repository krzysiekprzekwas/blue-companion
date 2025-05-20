import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getShipImage } from '@/utils/shipImages';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; 

export default function ShipDetailsScreen() {
  const { name, id, lightDescription } = useLocalSearchParams<{ name: string; id: string; lightDescription: string }>();

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
          <Collapsible title="Description">
            <ThemedText>
              {lightDescription}
            </ThemedText>
          </Collapsible>
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