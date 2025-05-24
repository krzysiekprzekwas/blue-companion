import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

// This would typically come from your data source
const flagTypes = [
  { name: 'Alpha', meaning: 'I have a diver down; keep well clear at slow speed' },
  { name: 'Bravo', meaning: 'I am taking in, discharging, or carrying dangerous goods' },
  { name: 'Charlie', meaning: 'Yes (affirmative)' },
  { name: 'Delta', meaning: 'Keep clear of me; I am maneuvering with difficulty' },
  { name: 'Echo', meaning: 'I am altering my course to starboard' },
  // Add more flag types as needed
];

export default function FlagsTrainingScreen() {
  const router = useRouter();
  const [currentFlag, setCurrentFlag] = useState<typeof flagTypes[0] | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = new Animated.Value(0);

  useEffect(() => {
    selectRandomFlag();
  }, []);

  const selectRandomFlag = () => {
    const randomFlag = flagTypes[Math.floor(Math.random() * flagTypes.length)];
    setCurrentFlag(randomFlag);
    setIsFlipped(false);
    flipAnimation.setValue(0);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  if (!currentFlag) return null;

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={flipCard} style={styles.cardContainer}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <ThemedText style={styles.cardText}>Flag: {currentFlag.name}</ThemedText>
          <ThemedText style={styles.cardText}>Tap to reveal meaning</ThemedText>
          {/* Here you would display the flag image */}
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <ThemedText style={styles.cardText}>{currentFlag.meaning}</ThemedText>
        </Animated.View>
      </Pressable>
      <Pressable
        style={styles.nextButton}
        onPress={selectRandomFlag}>
        <ThemedText style={styles.buttonText}>Next Flag</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  cardBack: {
    backgroundColor: Colors.light.tint,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.light.tint,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.light.background,
  },
}); 