import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

type Flag = {
  id: string;
  name: string;
  code: string;
  description: string;
  imageUrl: string;
};

const flags: Flag[] = [
  {
    id: 'alpha',
    name: 'Alpha',
    code: 'A',
    description: 'I have a diver down; keep well clear at slow speed',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/ICS_Alfa.svg/1920px-ICS_Alfa.svg.png',
  },
  {
    id: 'bravo',
    name: 'Bravo',
    code: 'B',
    description: 'I am taking in, discharging, or carrying dangerous goods',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/ICS_Bravo.svg/1920px-ICS_Bravo.svg.png',
  },
  {
    id: 'charlie',
    name: 'Charlie',
    code: 'C',
    description: 'Yes (affirmative)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Charlie_flag.svg/1920px-Charlie_flag.svg.png',
  },
  {
    id: 'delta',
    name: 'Delta',
    code: 'D',
    description: 'Keep clear of me; I am maneuvering with difficulty',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Delta_flag.svg/1920px-Delta_flag.svg.png',
  },
  {
    id: 'echo',
    name: 'Echo',
    code: 'E',
    description: 'I am altering my course to starboard',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Echo_flag.svg/1920px-Echo_flag.svg.png',
  },
  {
    id: 'foxtrot',
    name: 'Foxtrot',
    code: 'F',
    description: 'I am disabled; communicate with me',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Foxtrot_flag.svg/1920px-Foxtrot_flag.svg.png',
  },
  {
    id: 'golf',
    name: 'Golf',
    code: 'G',
    description: 'I require a pilot',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ICS_Golf.svg/1200px-ICS_Golf.svg.png',
  },
  {
    id: 'hotel',
    name: 'Hotel',
    code: 'H',
    description: 'I have a pilot on board',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ICS_Hotel.svg/1200px-ICS_Hotel.svg.png',
  },
  {
    id: 'india',
    name: 'India',
    code: 'I',
    description: 'I am altering my course to port',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ICS_India.svg/1200px-ICS_India.svg.png',
  },
  {
    id: 'juliet',
    name: 'Juliet',
    code: 'J',
    description: 'I am on fire and have dangerous cargo on board',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ICS_Juliet.svg/1200px-ICS_Juliet.svg.png',
  },
];

export default function FlagsScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <>
        <Stack.Screen
            options={{
            title: "Flags",
            headerTitleAlign: 'center',
            }}
        />
        <ThemedView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {flags.map((flag) => (
                <Pressable
                    key={flag.id}
                    style={({ pressed }) => [
                    styles.flagTile,
                    { opacity: pressed ? 0.7 : 1 },
                    ]}>
                    <Image
                    source={{ uri: flag.imageUrl }}
                    style={styles.flagImage}
                    contentFit="contain"
                    />
                    <View style={styles.flagInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                            <Text style={styles.flagCode}>
                                {flag.name[0]}
                            </Text>
                            <Text style={styles.flagName}>
                              {flag.name.slice(1)}
                            </Text>
                        </View>
                        <Text style={styles.flagDescription}>
                          {flag.description}
                        </Text>
                    </View>
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
  flagTile: {
    flexDirection: 'row',
    backgroundColor: '#1B2A47',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    alignItems: 'center',
  },
  flagImage: {
    width: 80,
    height: 80,
  },
  flagInfo: {
    flex: 1,
    gap: 4,
  },
  flagCode: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#FFFFFF',
  },
  flagName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  flagDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
}); 