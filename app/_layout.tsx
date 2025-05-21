import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/open-sans.semibold.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    CormorantUpright: require('../assets/fonts/CormorantUpright-SemiBold.ttf'),
  });
  const router = useRouter();

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <LanguageProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
            },
            headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: '',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Pressable onPress={() => router.push('/settings')} style={{ marginRight: 16 }}>
                  <Ionicons name="settings-sharp" size={24} color={tintColor} />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              title: 'Settings',
              headerTitleAlign: 'center',
              headerRight: () => null,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </LanguageProvider>
  );
}
