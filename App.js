import { useFonts } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/navigation/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
