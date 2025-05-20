import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getShipImage } from '@/utils/shipImages';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

type Ship = {
  id: string;
  name: string;
  type: string;
  category: string;
  lightDescription?: string;
};

const ships: Ship[] = [
  // Power vessels
  {
    id: 'power-small',
    name: 'Small Power Vessel',
    type: 'Power Vessel',
    category: 'Less than 12m',
    lightDescription: 'A small power-driven vessel under 12 meters long shall exhibit side, stern and mast lights. The side lights may be combined in one lantern. The mast and stern light may be replaced by one light visible from all sides',
  },
  {
    id: 'power-medium',
    name: 'Medium Power Vessel',
    type: 'Power Vessel',
    category: 'Less than 50m',
    lightDescription: 'A medium power-driven vessel under 50 meters long shall exhibit side, stern and mast lights. Lights must be separate, cannot be combined. It is allowed to light up additional mast light, usually used to indicate direction where the vessel is heading.',
  },
  {
    id: 'power-large',
    name: 'Large Power Vessel',
    type: 'Power Vessel',
    category: 'More than 50m',
    lightDescription: 'A large power-driven vessel under 50 meters long shall exhibit side, stern and 2 mast lights. It carries all the lights from medium sized vessel with additional, obligatory mast light.',
  },
  // Fishing vessels
  {
    id: 'fishing-trawler',
    name: 'Fishing Trawler',
    type: 'Fishing Vessel',
    category: 'Trawler',
  },
  {
    id: 'fishing-other',
    name: 'Other Fishing Vessel',
    type: 'Fishing Vessel',
    category: 'Not Trawler',
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
            params: { name: ship.name, id: ship.id, lightDescription: ship.lightDescription },
          })}>
          <Image
            source={getShipImage( ship.id, 'top')}
            style={styles.shipImage}
            contentFit="contain"
          />
          <View style={styles.shipInfo}>
            <Text style={styles.titleText}>{ship.name}</Text>
            <Text style={styles.categoryText}>{ship.category}</Text>
          </View>
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
    flexDirection: 'column',
    backgroundColor: '#1B2A47',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    alignItems: 'stretch',
  },
  shipImage: {
    width: '100%', 
    height: 160,
  },
  shipInfo: {
    width: '100%', 
    gap: 4,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  categoryText: {
    color: 'white',
    marginBottom: 12,
  },
});