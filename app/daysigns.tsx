import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

type DaySign = {
  id: string;
  name: string;
  description: string;
  image: any;
};

const daySigns: DaySign[] = [
  {
    id: 'anchor',
    name: 'Vessels at anchor',
    description: 'When at anchor, vessels greater than 7 m must display forward, where best seen, one black ball. This is not required for vessels of less than 7 m when at anchor, not in or near a narrow, fairway or anchorage, or where others normally navigate.',
    image: require('@/assets/images/signs/anchor.png'),
  },
  {
    id: 'sail_under_power',
    name: 'Vessels under power with sails set',
    description: 'A vessel proceeding under power with sails set, that is motor sailing, must display forward, where best seen, one black cone, point down.',
    image: require('@/assets/images/signs/sailing_under_power.png'),
  },
  {
    id: 'fishing',
    name: 'Fishing vessels',
    description: 'A fishing vessel using trawls, nets or other gear, whether under way or at anchor must display in a vertical line, two black cones pointing toward each other.',
    image: require('@/assets/images/signs/fishing.png'),
  }
];

export default function DaySignsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <>
      <Stack.Screen
        options={{
          title: "Day Signs",
          headerTitleAlign: 'center',
        }}
      />
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
              source={sign.image}
              style={styles.signImage}
              contentFit="contain"
            />
            <ThemedView style={styles.signInfo}>
              <ThemedText type="subtitle">{sign.name}</ThemedText>
            </ThemedView>
          </Pressable>
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
    gap: 16,
    paddingBottom: 20,
  },
  signTile: {
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0.05)',
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