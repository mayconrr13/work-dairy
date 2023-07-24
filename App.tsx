/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StackRoutes } from './src/routes/stack.routes';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import KeyboardSafeZone from './src/components/KeyboardSafeZone';
import React from 'react';
import GlobalThemeProvider from './src/theme/GlobalThemeProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsLight: require('./src/assets/fonts/PoppinsLight.ttf'),
    PoppinsRegular: require('./src/assets/fonts/PoppinsRegular.ttf'),
    PoppinsSemiBold: require('./src/assets/fonts/PoppinsSemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <GlobalThemeProvider>
        <KeyboardSafeZone>
          <StackRoutes />
        </KeyboardSafeZone>
        <StatusBar style="auto" />
      </GlobalThemeProvider>
    </NavigationContainer>
  );
}
