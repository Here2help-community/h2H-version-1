import React from "react";
import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import AppText from "../component/AppText/AppText";
import Dark_Button from "../Items/Buttons/dark-bt";
import Grey_Button from "../Items/Buttons/grey-bt";
import Styles from "./OnboardStyles";

import Colors from "../Items/Colors";
import { ScrollView } from "react-native-gesture-handler";

const Onboard_Enter_Number = (props) => {
  const inputRef = useRef(null);
  const setRefValue = (v) => {
    const clean = v.replace(/[^0-9]/g, "");
    inputRef.current.value = clean;
    inputRef.current.setNativeProps({ text: clean });
  };
  return (
    <ScrollView>
      <View style={styles.status_bar}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </View>
      <View style={styles.screen}>
        <TouchableOpacity
          activeOpacity={0.72}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image source={require("./img/backArrow.png")} />
        </TouchableOpacity>
        <View style={styles.title}>
          <AppText style={Styles.head}>What’s your{"\n"}number?</AppText>
        </View>
        <View style={styles.container2}>
          <AppText>We never share this, it won’t be on your profile</AppText>
        </View>
        <View style={styles.container3}>
          <TextInput
            style={styles.input}
            placeholder="Your phone number here"
            ref={inputRef}
            keyboardType="numeric"
            onChangeText={setRefValue}
          />
        </View>

        <View style={styles.container4}>
          <Dark_Button
            onPress={() =>
              props.navigation.navigate("OnboardingScreen_7", {
                ...props.route.params,
              })
            }
          >
            Continue
          </Dark_Button>
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
  },
  container3: {
    paddingVertical: "10%",
  },
  container4: {
    paddingVertical: "10%",
  },
  button: {
    alignItems: "flex-start",
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

export default Onboard_Enter_Number;
