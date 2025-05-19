import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

type Ship = {
  id: string;
  name: string;
  type: string;
  category: string;
  imageUrl: string;
};

const ships: Ship[] = [
  // Power vessels
  {
    id: 'power-small',
    name: 'Small Power Vessel',
    type: 'Power Vessel',
    category: 'Less than 12m',
    imageUrl: '../assets/images/power-medium.png',
  },
  {
    id: 'power-medium',
    name: 'Medium Power Vessel',
    type: 'Power Vessel',
    category: 'Less than 50m',
    imageUrl: '/assets/images/power-medium.png',
  },
  {
    id: 'power-large',
    name: 'Large Power Vessel',
    type: 'Power Vessel',
    category: 'More than 50m',
    imageUrl: 'https://placehold.co/400x200/1D3D47/FFFFFF/png?text=Large+Power+Vessel',
  },
  // Fishing vessels
  {
    id: 'fishing-trawler',
    name: 'Fishing Trawler',
    type: 'Fishing Vessel',
    category: 'Trawler',
    imageUrl: 'https://placehold.co/400x200/1D3D47/FFFFFF/png?text=Fishing+Trawler',
  },
  {
    id: 'fishing-other',
    name: 'Other Fishing Vessel',
    type: 'Fishing Vessel',
    category: 'Not Trawler',
    imageUrl: 'https://placehold.co/400x200/1D3D47/FFFFFF/png?text=Other+Fishing+Vessel',
  },
];

export default function LightsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  const powerVessels = ships.filter(ship => ship.type === 'Power Vessel');
  const fishingVessels = ships.filter(ship => ship.type === 'Fishing Vessel');

  const renderShipGroup = (title: string, vessels: Ship[]) => (
    <ThemedView key={title} style={styles.groupContainer}>
      <ThemedText type="title">{title}</ThemedText>
      {vessels.map((ship) => (
        <Pressable
          key={ship.id}
          style={({ pressed }) => [
            styles.shipTile,
            { opacity: pressed ? 0.7 : 1 },
          ]}
          onPress={() => router.push({
            pathname: '/ship-details',
            params: { name: ship.name, type: ship.type }
          })}>
          <Image
            source={{ uri: ship.imageUrl }}
            style={styles.shipImage}
            contentFit="contain"
          />
          <ThemedView style={styles.shipInfo}>
            <ThemedText type="subtitle">{ship.name}</ThemedText>
            <ThemedText>{ship.category}</ThemedText>
          </ThemedView>
        </Pressable>
      ))}
    </ThemedView>
  );

  return (
    <>
        <Stack.Screen
            options={{
            title: "Lights",
            headerTitleAlign: 'center',
            }}
         />
        <ThemedView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {renderShipGroup('Power Vessels', powerVessels)}
                {renderShipGroup('Fishing Vessels', fishingVessels)}
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
    gap: 32,
    paddingBottom: 20,
  },
  groupContainer: {
    gap: 16,
  },
  shipTile: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    alignItems: 'center',
  },
  shipImage: {
    width: 120,
    height: 60,
    borderRadius: 8,
  },
  shipInfo: {
    flex: 1,
    gap: 4,
  },
}); 