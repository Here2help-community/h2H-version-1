import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "../component/AppText/AppText";
import Dark_Button from "../Items/Buttons/dark-bt";
import Grey_Button from "../Items/Buttons/grey-bt";
import Styles from "./OnboardStyles";

import Colors from "../Items/Colors";
import { ScrollView } from "react-native-gesture-handler";

const Onboard_Add_Profile_Pic = (props) => {
  return (
    <ScrollView>
      <View style={styles.status_bar}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </View>
      <View style={styles.screen}>
        <View style={styles.button}>
          <Grey_Button
            onPress={() =>
              props.navigation.navigate("OnboardingScreen_6", {
                ...props.route.params,
              })
            }
          >
            Skip
          </Grey_Button>
        </View>
        <View style={styles.title}>
          <AppText style={Styles.head}>Add profile{"\n"}photo</AppText>
        </View>
        <View style={styles.container2}>
          <Image
            source={require("./img/cameraIcon.png")}
            resizeMode="contain"
            style={{
              // width: "100%",
              // height: "100%",
              alignSelf: "center",
            }}
          />
        </View>

        <View style={styles.container3}>
          <Dark_Button>Add Photo</Dark_Button>
        </View>
        <View>
          <AppText style={styles.container4}>
            You can update or remove this from your {"\n"}profile at anytime
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: "7%",
  },
  status_bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "10%",
  },
  bar: {
    width: 75,
    height: 3,
    backgroundColor: "#2D375B",
    marginTop: 30,
  },
  container1: {
    paddingVertical: "5%",
    backgroundColor: "lightblue",
  },
  container2: {
    paddingVertical: "5%",
    // backgroundColor: "pink",
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
  },
  container3: {
    paddingVertical: "10%",
  },
  container4: {
    textAlign: "center",
  },
  button: {
    alignItems: "flex-end",
  },
  head: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary2,
  },
  input: {
    fontSize: 15,
    color: Colors.secondary3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary2,
  },
  title: {
    paddingVertical: "5%",
  },
});

export default Onboard_Add_Profile_Pic;
