import { ThemedView } from '@/components/ThemedView';
import { flags } from '@/constants/Flags';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FlagsScreen() {

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