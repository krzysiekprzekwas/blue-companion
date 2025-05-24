import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Flag, flags } from '@/constants/Flags';

const flipAnimation = new Animated.Value(0);

export default function FlagsTrainingScreen() {
  const router = useRouter();
  const [currentFlag, setCurrentFlag] = useState<Flag | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    selectRandomFlag();
  }, []);

  const selectRandomFlag = () => {
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag(randomFlag);
    setIsFlipped(false);
    flipAnimation.setValue(0);
  };

  const flipCard = () => {
    const toValue = isFlipped ? 0 : 180;
    setIsFlipped(!isFlipped);
    
    Animated.spring(flipAnimation, {
      toValue,
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
          <Image
            source={{ uri: currentFlag.imageUrl }}
            style={styles.flagImage}
            contentFit="contain"
          />
          <ThemedText style={styles.cardText}>Flag: {currentFlag.name}</ThemedText>
          <ThemedText style={styles.cardText}>Tap to reveal meaning</ThemedText>
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <ThemedText style={styles.cardText}>{currentFlag.description}</ThemedText>
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
    height: 200,
  },
  flagImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
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