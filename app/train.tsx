import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { translations } from '@/constants/Translations';
import { useLanguage } from '@/contexts/LanguageContext';
import CategoryCard from '../components/CategoryCard';

type TrainingCategory = {
  id: string;
  titleKey: keyof typeof translations.en;
  icon: keyof typeof Ionicons.glyphMap;
  route: '/train/lights' | '/train/flags';
};

const trainingCategories: TrainingCategory[] = [
  {
    id: 'train-lights',
    titleKey: 'lights',
    icon: 'bulb-outline',
    route: '/train/lights',
  },
  {
    id: 'train-flags',
    titleKey: 'flags',
    icon: 'flag-outline',
    route: '/train/flags',
  },
];

export default function TrainingScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Train",
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.gridContainer}>
        {trainingCategories.map((category) => (
          <Pressable
            key={category.id}
            style={({ pressed }) => [
              styles.tile,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => router.push(category.route)}>
            <CategoryCard 
              name={t(category.titleKey)} 
              iconName={category.icon}
            ></CategoryCard>
          </Pressable>
        ))}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  tile: {
    width: '47%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    gap: 8,
  },
}); 