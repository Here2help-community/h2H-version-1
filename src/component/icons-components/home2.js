import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Home2 = (props) => {
  return (
    <View style={{ ...styles.tabScreen, ...props.style }}>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require("../../Items/Icons/home1.png")}
          resizeMode="contain"
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    maxHeight: "100%",
  },
});

export default Home2;
