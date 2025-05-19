import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

type Buoy = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  group: string;
};

const buoys: Buoy[] = [
  // IALA A
  {
    id: 'iala-a-port',
    name: 'Port Hand Mark',
    description: 'Red can or pillar buoy marking the port side of the channel',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Port+Hand',
    group: 'IALA A',
  },
  {
    id: 'iala-a-starboard',
    name: 'Starboard Hand Mark',
    description: 'Green conical buoy marking the starboard side of the channel',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Starboard+Hand',
    group: 'IALA A',
  },
  // IALA B
  {
    id: 'iala-b-port',
    name: 'Port Hand Mark',
    description: 'Green can or pillar buoy marking the port side of the channel',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Port+Hand',
    group: 'IALA B',
  },
  {
    id: 'iala-b-starboard',
    name: 'Starboard Hand Mark',
    description: 'Red conical buoy marking the starboard side of the channel',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Starboard+Hand',
    group: 'IALA B',
  },
  // Cardinal Marks
  {
    id: 'cardinal-north',
    name: 'North Cardinal Mark',
    description: 'Black over yellow buoy indicating safe water to the north',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=North+Cardinal',
    group: 'Cardinal Marks',
  },
  {
    id: 'cardinal-east',
    name: 'East Cardinal Mark',
    description: 'Black with yellow band buoy indicating safe water to the east',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=East+Cardinal',
    group: 'Cardinal Marks',
  },
  {
    id: 'cardinal-south',
    name: 'South Cardinal Mark',
    description: 'Yellow over black buoy indicating safe water to the south',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=South+Cardinal',
    group: 'Cardinal Marks',
  },
  {
    id: 'cardinal-west',
    name: 'West Cardinal Mark',
    description: 'Yellow with black band buoy indicating safe water to the west',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=West+Cardinal',
    group: 'Cardinal Marks',
  },
  // Isolated Danger Marks
  {
    id: 'isolated-danger',
    name: 'Isolated Danger Mark',
    description: 'Black and red striped buoy marking an isolated danger',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Isolated+Danger',
    group: 'Isolated Danger Marks',
  },
  // Safe Water Marks
  {
    id: 'safe-water',
    name: 'Safe Water Mark',
    description: 'Red and white striped buoy indicating safe water all around',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Safe+Water',
    group: 'Safe Water Marks',
  },
  // Special Marks
  {
    id: 'special',
    name: 'Special Mark',
    description: 'Yellow buoy indicating special purpose or area',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Special+Mark',
    group: 'Special Marks',
  },
  // New Dangers
  {
    id: 'new-danger',
    name: 'New Danger Mark',
    description: 'Blue and yellow striped buoy marking a newly discovered danger',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=New+Danger',
    group: 'New Dangers',
  },
];

export default function BuoysScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  const groups = Array.from(new Set(buoys.map(buoy => buoy.group)));

  return (
    <>
        <Stack.Screen
            options={{
                title: "Buoys",
                headerTitleAlign: 'center',
            }}
        />
        <ThemedView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {groups.map((group) => (
                <ThemedView key={group} style={styles.groupContainer}>
                    <ThemedText type="title">{group}</ThemedText>
                    {buoys
                    .filter(buoy => buoy.group === group)
                    .map((buoy) => (
                        <Pressable
                        key={buoy.id}
                        style={({ pressed }) => [
                            styles.buoyTile,
                            { opacity: pressed ? 0.7 : 1 },
                        ]}
                        onPress={() => {
                            router.push({
                            pathname: '/buoy-details' as const,
                            params: {
                                name: buoy.name,
                                description: buoy.description,
                            },
                            });
                        }}>
                        <Image
                            source={{ uri: buoy.imageUrl }}
                            style={styles.buoyImage}
                            contentFit="contain"
                        />
                        <ThemedView style={styles.buoyInfo}>
                            <ThemedText type="subtitle">{buoy.name}</ThemedText>
                            <ThemedText>{buoy.description}</ThemedText>
                        </ThemedView>
                        </Pressable>
                    ))}
                </ThemedView>
                ))}
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
  buoyTile: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    alignItems: 'center',
  },
  buoyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  buoyInfo: {
    flex: 1,
    gap: 4,
  },
}); 