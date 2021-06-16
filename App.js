import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import fb from "./src/config/firebase";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import HomeScreen from "./src/navigation/HomeScreen";

import store from './src/asyncStorage/store'
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT, EMAIL_PASSWORD_AUTH, ONBOARD, HOME, SIGN_UP } from "./src/asyncStorage/actionsList";
import MyTabs from "./src/navigation/bottom-navigator";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleAuthStateChange } from "./src/utils/authenticationHandler";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  const dispatchInitialState = () => {
    AsyncStorage.getItem("initial_start")
      .then((value) => {
        if (value === null) {
          AsyncStorage.setItem("initial_start", "true").catch((e) => {
            console.log(e);
          });

          store.dispatch({ type: ONBOARD });
        } else {
          if (value === 'true') 
            store.dispatch({ type: ONBOARD })
          else
            store.dispatch({ type: SIGN_IN })

          fb.auth().onAuthStateChanged(user => handleAuthStateChange(user))
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(dispatchInitialState, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <HomeScreen />;
}
