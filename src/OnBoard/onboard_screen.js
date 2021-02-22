import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../Items/Colors";

const Onboard_screen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container1}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      </View>

      <View style={styles.container2}>
        <Text style={styles.head1}>Seek local</Text>
        <Text style={styles.head1}>Volunteers</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.head2}>Ask for assistance! Get help with pet</Text>
        <Text style={styles.head2}>care, transportation and handywork!</Text>
      </View>
      <View style={styles.container4}>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
        <View style={styles.line2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "2.8%",
  },
  container1: {
    flex: 3,
    width: "100%",
  },
  container2: {
    flex: 1,
    width: "100%",
  },
  container3: {
    flex: 1.7,
    width: "100%",
  },
  head1: {
    fontSize: 37,
    fontWeight: "bold",
    color: Colors.primary2,
  },
  head2: {
    fontSize: 15,
    color: Colors.primary3,
  },
  line: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.primary1,
  },
  line2: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.disabledbutton,
  },
  container4: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "5",
  },
});

export default Onboard_screen;
