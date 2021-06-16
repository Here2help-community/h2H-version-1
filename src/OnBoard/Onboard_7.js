import React from "react";
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

const Onboard_Verify_Number = (props) => {
  return (
    <ScrollView>
      <View style={styles.status_bar}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </View>
      <View style={styles.screen}>
        {/* <View style={styles.container1}>
          <Text>Insert navigational slider here</Text>
        </View> */}
        <TouchableOpacity
          activeOpacity={0.72}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image source={require("./img/backArrow.png")} />
        </TouchableOpacity>
        <View style={styles.title}>
          <AppText style={Styles.head}>Verify your{"\n"}number?</AppText>
        </View>
        <View style={styles.container2}>
          <AppText>We never share this, it won’t be on your profile</AppText>
        </View>
        <View style={styles.container3}>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </View>

        <View style={styles.container4}>
          <Dark_Button
            onPress={() =>
              props.navigation.navigate("SignUp_Complete", {
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
  container1: {},
  container2: {
    paddingVertical: "5%",
  },
  container3: {
    paddingVertical: "10%",
    //backgroundColor: "lightblue",
    alignItems: "center",
  },
  container4: {
    paddingVertical: "10%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "75%",
    //backgroundColor: "yellow",
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
    borderRadius: 5,
    color: Colors.secondary3,
    borderColor: "#707070",
    borderWidth: 1,
    height: 45,
    width: 35,
    textAlign: "center",
  },
  title: {
    paddingVertical: "5%",
  },
});

export default Onboard_Verify_Number;
