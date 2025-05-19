import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type SoundSignal = {
  id: string;
  name: string;
  description: string;
  group: string;
  signals: {
    type: 'dot' | 'line' | 'bell' | 'gong';
    count?: number;
  }[];
};

const soundSignals: SoundSignal[] = [
  // Warnings & Maneuvers
  {
    id: 'turning-right',
    name: 'Turning Right',
    description: 'One short blast indicates intention to turn to starboard (right)',
    group: 'Warnings & Maneuvers',
    signals: [{ type: 'dot', count: 1 }],
  },
  {
    id: 'turning-left',
    name: 'Turning Left',
    description: 'Two short blasts indicate intention to turn to port (left)',
    group: 'Warnings & Maneuvers',
    signals: [{ type: 'dot', count: 2 }],
  },
  {
    id: 'going-backwards',
    name: 'Going Backwards',
    description: 'Three short blasts indicate vessel is operating astern propulsion',
    group: 'Warnings & Maneuvers',
    signals: [{ type: 'dot', count: 3 }],
  },
  // Low Visibility
  {
    id: 'power-ship-moving',
    name: 'Power Ship Moving',
    description: 'One prolonged blast every 2 minutes indicates vessel is making way through water',
    group: 'Low Visibility',
    signals: [{ type: 'line', count: 1 }],
  },
  {
    id: 'power-ship-not-moving',
    name: 'Power Ship Not Moving',
    description: 'Two prolonged blasts every 2 minutes indicates vessel is stopped and making no way through water',
    group: 'Low Visibility',
    signals: [{ type: 'line', count: 2 }],
  },
  {
    id: 'anchored-less-100',
    name: 'Anchored Less Than 100m',
    description: 'Rapid ringing of bell for 5 seconds every minute indicates vessel at anchor less than 100m in length',
    group: 'Low Visibility',
    signals: [{ type: 'bell', count: 5 }],
  },
  {
    id: 'anchored-over-100',
    name: 'Anchored Over 100m',
    description: 'Rapid ringing of bell for 5 seconds followed by gong every minute indicates vessel at anchor over 100m in length',
    group: 'Low Visibility',
    signals: [
      { type: 'bell', count: 5 },
      { type: 'gong', count: 1 },
    ],
  },
];

const SignalVisual = ({ type, count = 1 }: { type: 'dot' | 'line' | 'bell' | 'gong'; count?: number }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  const renderSignal = () => {
    switch (type) {
      case 'dot':
        return Array(count).fill('•').join(' ');
      case 'line':
        return Array(count).fill('—').join(' ');
      case 'bell':
        return Array(count).fill('🔔').join(' ');
      case 'gong':
        return Array(count).fill('🔔').join(' ');
    }
  };

  return (
    <ThemedText style={[styles.signal, { color: tintColor }]}>
      {renderSignal()}
    </ThemedText>
  );
};

export default function SoundsScreen() {
  const groups = Array.from(new Set(soundSignals.map(signal => signal.group)));

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sounds',
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {groups.map((group) => (
            <ThemedView key={group} style={styles.groupContainer}>
              <ThemedText type="title">{group}</ThemedText>
              {soundSignals
                .filter(signal => signal.group === group)
                .map((signal) => (
                  <ThemedView key={signal.id} style={styles.signalTile}>
                    <ThemedView style={styles.signalInfo}>
                      <ThemedText type="subtitle">{signal.name}</ThemedText>
                      <ThemedText>{signal.description}</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.signalVisual}>
                      {signal.signals.map((s, index) => (
                        <SignalVisual key={index} type={s.type} count={s.count} />
                      ))}
                    </ThemedView>
                  </ThemedView>
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
  signalTile: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  signalInfo: {
    gap: 4,
  },
  signalVisual: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  signal: {
    fontSize: 24,
  },
}); 