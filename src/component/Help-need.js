import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Handy from "./home/Handy";
import Pet from "./home/Pet";
import Social from "./home/Social";
import Transport from "./home/Transport";

const Victim = (props) => {
  return (
    <View style={styles.screen}>
      {props.children}
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.Heading}> What Help You Need With ? </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
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

export default Victim;
