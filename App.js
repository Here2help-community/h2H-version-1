import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Inter_900Black, } from '@expo-google-fonts/inter';
import Onboarding_1 from './src/component/Onboard/Onboard1';
// import HomeScreen from './src/navigation/HomeScreen';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Onboarding_1 /> 
  // return <HomeScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
