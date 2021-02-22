import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const User1 = (props) => {
  return (
    <View style={{ ...styles.tabScreen, ...props.style }}>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require("../../Items/Icons/user1.png")}
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

export default User1;
