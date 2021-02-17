import React from "react";
import { StyleSheet, View } from "react-native";
import Volunteer_Components from "./home/volunteer-component";

const Volunteer = (props) => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      {props.children}
      <View style={styles.container1}>
        <Volunteer_Components />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  container1: {
    flex: 10,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    paddingBottom: "4%",
  },
});

export default Volunteer;
