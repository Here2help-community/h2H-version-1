import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Browsing_Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Browsing_Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Browsing_Screen;
