import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Handy from "./Handy";
import Pet from "./Pet";
import Social from "./Social";
import Transport from "./Transport";

const Volunteer_Components = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.Heading}> What Can You Help With ? </Text>
      </View>

      <View style={styles.social}>
        <Social />
      </View>

      <View style={styles.social}>
        <Pet />
      </View>

      <View style={styles.social}>
        <Handy />
      </View>

      <View style={styles.social}>
        <Transport />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    paddingBottom: "4%",
  },
  head: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2%",
  },
  social: {
    marginHorizontal: "4%",
    marginVertical: "2.4%",
    height: "18.6%",
  },

  Heading: {
    fontSize: 22,
    fontWeight: "100",
    padding: "1%",
  },
});

export default Volunteer_Components;
