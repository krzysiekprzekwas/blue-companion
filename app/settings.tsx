import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SettingsScreen() {
  const { language, setLanguage, t } = useLanguage();
  const colorScheme = useColorScheme() ?? 'light';
  const tintColor = Colors[colorScheme].tint;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('settings')}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">{t('language')}</ThemedText>
        <ThemedView style={styles.languageContainer}>
          <Pressable
            style={[
              styles.languageButton,
              language === 'en' && { backgroundColor: tintColor },
            ]}
            onPress={() => setLanguage('en')}>
            <ThemedText
              style={[
                styles.languageText,
                language === 'en' && { color: '#FFFFFF' },
              ]}>
              {t('english')}
            </ThemedText>
          </Pressable>
          <Pressable
            style={[
              styles.languageButton,
              language === 'pl' && { backgroundColor: tintColor },
            ]}
            onPress={() => setLanguage('pl')}>
            <ThemedText
              style={[
                styles.languageText,
                language === 'pl' && { color: '#FFFFFF' },
              ]}>
              {t('polish')}
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  section: {
    gap: 16,
  },
  languageContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  languageButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
