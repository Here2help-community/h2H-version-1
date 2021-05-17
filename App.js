import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import fb from './src/config/firebase';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
// import HomeScreen from "./src/navigation/HomeScreen";
import Onboard_screen from "./src/OnBoard/Onboard_1";

import store from './src/asyncStorage/store'
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT, EMAIL_PASSWORD_AUTH, ONBOARD, HOME } from "./src/asyncStorage/actionsList";
import MyTabs from "./src/navigation/bottom-navigator";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  });

  const dispatchInitialState = () => {
    AsyncStorage.getItem('initial_start')
      .then(value => {
        if (value === null) {
          AsyncStorage.setItem('initial_start', 'true')
            .catch(e => {
              console.log(e)
            })
          
          store.dispatch({ type: ONBOARD })
        } else {
          if (value === 'true') 
            store.dispatch({ type: ONBOARD })
          else 
            fb.auth().onAuthStateChanged((user) => {
              if (user == null)
                store.dispatch({ type: SIGN_IN })
              else 
                store.dispatch({ type: HOME, authType: EMAIL_PASSWORD_AUTH })
            });
        }
      }).catch(e => {
        console.log(e)
      })
  }

  useEffect(dispatchInitialState, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // return <HomeScreen />;
  return <Onboard_screen />;
}
