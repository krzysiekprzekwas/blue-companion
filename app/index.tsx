import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Category = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: '/lights' | '/flags' | '/daysigns' | '/buoys' | '/sounds';
};

const categories: Category[] = [
  {
    id: 'lights',
    title: 'Lights',
    icon: 'bulb-outline',
    route: '/lights',
  },
  {
    id: 'flags',
    title: 'Flags',
    icon: 'flag-outline',
    route: '/flags',
  },
  {
    id: 'daysigns',
    title: 'Day Signs',
    icon: 'warning-outline',
    route: '/daysigns',
  },
  {
    id: 'buoys',
    title: 'Buoys',
    icon: 'compass-outline',
    route: '/buoys',
  },
  {
    id: 'sounds',
    title: 'Sounds',
    icon: 'volume-high-outline',
    route: '/sounds',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Categories</ThemedText>
      </ThemedView>
      <ThemedView style={styles.gridContainer}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={({ pressed }) => [
              styles.tile,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => router.push(category.route)}>
            <Ionicons name={category.icon} size={32} color={tintColor} />
            <ThemedText type="subtitle">{category.title}</ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  tile: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
