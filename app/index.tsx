import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { translations } from '@/constants/Translations';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import CategoryCard from '../components/CategoryCard';

type Category = {
  id: string;
  titleKey: keyof typeof translations.en;
  icon: keyof typeof Ionicons.glyphMap;
  route: '/lights' | '/flags' | '/daysigns' | '/buoys' | '/sounds';
};

const categories: Category[] = [
  {
    id: 'lights',
    titleKey: 'lights',
    icon: 'bulb-outline',
    route: '/lights',
  },
  {
    id: 'flags',
    titleKey: 'flags',
    icon: 'flag-outline',
    route: '/flags',
  },
  {
    id: 'daysigns',
    titleKey: 'daySigns',
    icon: 'warning-outline',
    route: '/daysigns',
  },
  {
    id: 'buoys',
    titleKey: 'buoys',
    icon: 'compass-outline',
    route: '/buoys',
  },
  {
    id: 'sounds',
    titleKey: 'sounds',
    icon: 'volume-high-outline',
    route: '/sounds',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;
  const { t } = useLanguage();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/companion-welcome.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.gridContainer}>
        {categories.map((category) => (
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
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
  reactLogo: {
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
