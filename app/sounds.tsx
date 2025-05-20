import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';

type SoundSignal = {
  id: string;
  name: string;
  description: string;
  group: string;
  signal: string;
};

const soundSignals: SoundSignal[] = [
  // Warnings & Maneuvers
  {
    id: 'turning-right',
    name: 'Turning Right',
    description: 'One short blast indicates intention to turn to starboard (right)',
    group: 'Warnings & Maneuvers',
    signal: '.',
  },
  {
    id: 'turning-left',
    name: 'Turning Left',
    description: 'Two short blasts indicate intention to turn to port (left)',
    group: 'Warnings & Maneuvers',
    signal: '..',
  },
  {
    id: 'going-backwards',
    name: 'Going Backwards',
    description: 'Three short blasts indicate vessel is operating astern propulsion',
    group: 'Warnings & Maneuvers',
    signal: '...',
  },
  {
    id: 'overtake-starboard',
    name: 'I intend to overtake on your starboard',
    description: 'Three short blasts indicate vessel is operating astern propulsion',
    group: 'Warnings & Maneuvers',
    signal: '--.',
  },
  {
    id: 'overtake-port',
    name: 'I intend to overtake on your port',
    description: 'Three short blasts indicate vessel is operating astern propulsion',
    group: 'Warnings & Maneuvers',
    signal: '--..',
  },
  // Low Visibility
  {
    id: 'power-ship-moving',
    name: 'Power Ship Moving',
    description: 'One prolonged blast every 2 minutes indicates vessel is making way through water',
    group: 'Low Visibility',
    signal: '--..',
  },
  {
    id: 'power-ship-not-moving',
    name: 'Power Ship Not Moving',
    description: 'Two prolonged blasts every 2 minutes indicates vessel is stopped and making no way through water',
    group: 'Low Visibility',
    signal: '--..',
  },
  {
    id: 'anchored-less-100',
    name: 'Anchored Less Than 100m',
    description: 'Rapid ringing of bell for 5 seconds every minute indicates vessel at anchor less than 100m in length',
    group: 'Low Visibility',
    signal: '--..b',
  },
  {
    id: 'anchored-over-100',
    name: 'Anchored Over 100m',
    description: 'Rapid ringing of bell for 5 seconds followed by gong every minute indicates vessel at anchor over 100m in length',
    group: 'Low Visibility',
    signal: '--..bg',
  },
];

const Dot = ({ color }: { color: string }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="6" fill={color} />
  </Svg>
);

const LineSymbol = ({ color }: { color: string }) => (
  <Svg width="48" height="24" viewBox="0 0 48 24">
    <Line x1="4" y1="12" x2="44" y2="12" stroke={color} strokeWidth="4" />
  </Svg>
);

const Bell = ({ color }: { color: string }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path
      d="M12 2C8.13 2 5 5.13 5 9v7c0 2.12 1.04 4.04 2.71 5.29L7 22h10l-.71-.71C17.96 20.04 19 18.12 19 16V9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5v7c0 1.29-.65 2.42-1.64 3.11L14 20h-4l-.36-.89C8.65 18.42 8 17.29 8 16V9c0-2.76 2.24-5 5-5z"
      fill={color}
    />
  </Svg>
);

const Gong = ({ color }: { color: string }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill={color}
    />
    <Path
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      fill={color}
    />
  </Svg>
);

const SignalVisual = ({ signal }: { signal: string }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;

  const renderSymbol = (char: string, index: number) => {
    switch (char) {
      case '.':
        return <Dot key={index} color={textColor} />;
      case '-':
        return <LineSymbol key={index} color={textColor} />;
      case 'b':
        return <Bell key={index} color={textColor} />;
      case 'g':
        return <Gong key={index} color={textColor} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.signalContainer}>
      {signal.split('').map((char, index) => renderSymbol(char, index))}
    </View>
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
                    <SignalVisual signal={signal.signal} />
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
  signalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
}); 