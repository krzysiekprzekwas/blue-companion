import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  name?: string;
  iconName: keyof typeof Ionicons.glyphMap;
};

export default function CategoryCard({
  name = "Flags",
  iconName = "flag-outline",
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundIconContainer}>
        <Ionicons name={iconName} size={240} color="rgba(192, 169, 137, 0.2)" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.badgeContainer}>
          <View style={styles.badgeCircle}>
            <Ionicons name={iconName} size={20} color="#C0A989" />
          </View>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: '#1B2A47',
    overflow: 'hidden',
    position: 'relative',
    height: 156,
  },
  backgroundIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: [{ translateX: 32 }, { translateY: 32 }],
  },
  contentContainer: {
    padding: 24,
    flex: 1,
  },
  badgeContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  badgeCircle: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleSection: {
    marginTop: 48,
    height: 48,
    flex: 1,
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});