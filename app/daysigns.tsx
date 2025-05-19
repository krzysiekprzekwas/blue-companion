import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

type DaySign = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const daySigns: DaySign[] = [
  {
    id: 'ball',
    name: 'Ball',
    description: 'A black ball shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Ball',
  },
  {
    id: 'cone',
    name: 'Cone',
    description: 'A black cone shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Cone',
  },
  {
    id: 'cylinder',
    name: 'Cylinder',
    description: 'A black cylinder shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Cylinder',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    description: 'A black diamond shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Diamond',
  },
  {
    id: 'sphere',
    name: 'Sphere',
    description: 'A black sphere shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Sphere',
  },
  {
    id: 'basket',
    name: 'Basket',
    description: 'A black basket shape',
    imageUrl: 'https://placehold.co/400x400/1D3D47/FFFFFF/png?text=Basket',
  },
];

export default function DaySignsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {daySigns.map((sign) => (
          <Pressable
            key={sign.id}
            style={({ pressed }) => [
              styles.signTile,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => router.push({
              pathname: '/sign-details' as const,
              params: { name: sign.name, description: sign.description }
            })}>
            <Image
              source={{ uri: sign.imageUrl }}
              style={styles.signImage}
              contentFit="contain"
            />
            <ThemedView style={styles.signInfo}>
              <ThemedText type="subtitle">{sign.name}</ThemedText>
              <ThemedText>{sign.description}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </ScrollView>
    </ThemedView>
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
    gap: 16,
    paddingBottom: 20,
  },
  signTile: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    alignItems: 'center',
  },
  signImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  signInfo: {
    flex: 1,
    gap: 4,
  },
}); 