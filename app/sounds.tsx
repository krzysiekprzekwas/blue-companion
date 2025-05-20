import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

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
  const [activeTab, setActiveTab] = useState<'warnings' | 'visibility'>('warnings');
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  const filteredSignals = soundSignals.filter(signal => 
    activeTab === 'warnings' 
      ? signal.group === 'Warnings & Maneuvers'
      : signal.group === 'Low Visibility'
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sounds',
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.container}>
        <ThemedView style={styles.tabContainer}>
          <Pressable
            style={[
              styles.tab,
              activeTab === 'warnings' && { backgroundColor: tintColor },
            ]}
            onPress={() => setActiveTab('warnings')}>
            <ThemedText
              style={[
                styles.tabText,
                activeTab === 'warnings' && { color: '#FFFFFF' },
              ]}>
              Warnings
            </ThemedText>
          </Pressable>
          <Pressable
            style={[
              styles.tab,
              activeTab === 'visibility' && { backgroundColor: tintColor },
            ]}
            onPress={() => setActiveTab('visibility')}>
            <ThemedText
              style={[
                styles.tabText,
                activeTab === 'visibility' && { color: '#FFFFFF' },
              ]}>
              Low Visibility
            </ThemedText>
          </Pressable>
        </ThemedView>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.groupContainer}>
            <ThemedText type="title">
              {activeTab === 'warnings' ? 'Warnings & Maneuvers' : 'Low Visibility'}
            </ThemedText>
            {filteredSignals.map((signal) => (
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
  tabContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
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