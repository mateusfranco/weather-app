import RootScreen from './src/screens/RootScreen';
import { useCustomFonts } from './src/hooks/useCustomFonts';
import AppLoading from 'expo-app-loading';
import { MyLoader } from './src/screens/LoadScreen/skeleton';
import { View } from 'react-native'
import React from 'react';

export default function App() {
  const isLoadedFonts = useCustomFonts();

  return (
    <View>
      {!isLoadedFonts ? <MyLoader /> : <RootScreen />}
    </View>
  );
}