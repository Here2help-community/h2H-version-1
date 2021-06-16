import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const Grey_Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.72} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // borderWidth: 2.5,
    // borderColor: "#2D375B",
    // paddingVertical: 15,
    // paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#CED3EE",
    fontWeight: "bold",
    fontSize: 29,
  },
});

export default Grey_Button;
