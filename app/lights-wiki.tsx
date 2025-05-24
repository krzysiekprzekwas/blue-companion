import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function LightsWikiScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Nautical Lights Guide",
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <ThemedText style={styles.sectionTitle}>Understanding Navigation Lights</ThemedText>
          <ThemedText style={styles.paragraph}>
            Navigation lights are a crucial part of maritime safety, helping vessels identify each other's position, direction, and type during darkness or poor visibility conditions. These lights follow international regulations set by the International Regulations for Preventing Collisions at Sea (COLREGS).
          </ThemedText>

          <ThemedText style={styles.sectionTitle}>Basic Light Colors</ThemedText>
          <ThemedText style={styles.paragraph}>
            • Red (Port): Visible from dead ahead to 112.5° on the port side{'\n'}
            • Green (Starboard): Visible from dead ahead to 112.5° on the starboard side{'\n'}
            • White (Stern): Visible from dead astern to 67.5° on each side{'\n'}
            • White (Masthead): Visible from dead ahead to 22.5° abaft the beam on each side
          </ThemedText>

          <ThemedText style={styles.sectionTitle}>Light Configurations</ThemedText>
          <ThemedText style={styles.paragraph}>
            Different types of vessels require different light configurations based on their size, type, and operation. The main categories include:{'\n\n'}
            • Power-driven vessels{'\n'}
            • Sailing vessels{'\n'}
            • Fishing vessels{'\n'}
            • Vessels at anchor{'\n'}
            • Vessels not under command{'\n'}
            • Vessels restricted in their ability to maneuver
          </ThemedText>

          <ThemedText style={styles.sectionTitle}>Visibility Requirements</ThemedText>
          <ThemedText style={styles.paragraph}>
            The visibility range of navigation lights varies based on vessel size:{'\n\n'}
            • Vessels less than 12m: 2 nautical miles{'\n'}
            • Vessels 12m to 50m: 3 nautical miles{'\n'}
            • Vessels over 50m: 6 nautical miles
          </ThemedText>
        </ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: 24,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
}); 