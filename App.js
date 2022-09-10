import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootScreen } from './src/screens/RootScreen/template';
import { useCustomFonts } from './src/hooks/useCustomFonts';
import AppLoading from 'expo-app-loading';


export default function App() {
  const isLoadedFonts = useCustomFonts();

  return (
    <View>
      {!isLoadedFonts ? <AppLoading /> : <RootScreen />}
    </View>
  );
}