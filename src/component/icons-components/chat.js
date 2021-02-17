import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Chat1 = (props) => {
  return (
    <View style={{ ...styles.tabScreen, ...props.style }}>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require("../../Items/Icons/Frame.png")}
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
    // backgroundColor: 'blue'
    // flexWrap:'wrap',
  },
  icon: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'green'
    // alignSelf:'center',
  },
  img: {
    width: "100%",
    maxHeight: "100%",
    // backgroundColor: 'red',
  },
});

export default Chat1;
