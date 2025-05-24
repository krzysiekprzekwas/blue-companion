import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Ship, ships, ShipSide } from '@/constants/Ships';

const flipAnimation = new Animated.Value(0);

export default function LightsTrainingScreen() {
  const router = useRouter();
  const [currentShip, setCurrentShip] = useState<Ship | null>(null);
  const [currentSide, setCurrentSide] = useState<ShipSide>('front');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    selectRandomShip();
  }, []);

  const selectRandomShip = () => {
    const randomShip = ships[Math.floor(Math.random() * ships.length)];
    const sides = Object.keys(randomShip.sides) as ShipSide[];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    setCurrentShip(randomShip);
    setCurrentSide(randomSide);
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

  if (!currentShip) return null;

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={flipCard} style={styles.cardContainer}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Image
            source={currentShip.sides[currentSide].image}
            style={styles.shipImage}
            resizeMode="contain"
          />
          <ThemedText style={styles.cardText}>Tap to reveal</ThemedText>
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <ThemedText style={styles.cardText}>{currentShip.type}</ThemedText>
          <ThemedText style={styles.cardText}>View from: {currentSide}</ThemedText>
          <ThemedText style={styles.descriptionText}>
            {currentShip.sides[currentSide].description}
          </ThemedText>
        </Animated.View>
      </Pressable>
      <Pressable
        style={styles.nextButton}
        onPress={selectRandomShip}>
        <ThemedText style={styles.buttonText}>Next Ship</ThemedText>
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
  shipImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white'
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    color: 'white'
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