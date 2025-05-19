import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'BlueHorizon Companion',
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
  );
}
