import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Top_container from "./head";

const Pet_screen7 = (props) => {
  const { petName } = props.route.params;
  const toTitleCase = (str) => str[0].toUpperCase() + str.slice(1);

  const [value, setValue] = React.useState("medium");
  const alter = "your pet";
  const petCall = petName === "" ? alter : petName;

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2={"What size is " + petCall + "?"}
        />
      </View>

      <View style={styles.midContainer}>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <View style={styles.radioBtnTxt}>
            <RadioButton color="#2D375B" value="small" />
            <Text style={styles.radioOption}>Small</Text>
          </View>
          <View style={styles.radioBtnTxt}>
            <RadioButton color="#2D375B" value="medium" />
            <Text style={styles.radioOption}>Medium</Text>
          </View>
          <View style={styles.radioBtnTxt}>
            <RadioButton color="#2D375B" value="large" />
            <Text style={styles.radioOption}>Large</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen8", {
              ...props.route.params,
              size: toTitleCase(value),
            })
          }
        >
          <Text>Next</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    padding: "1.8%",
  },

  topContainer: {
    flex: 5,
    width: "100%",
  },
  midContainer: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
  },

  radioOption: {
    alignSelf: "center",
    fontSize: 19,
    color: Colors.primary2,
  },
  radioBtnTxt: {
    paddingLeft: "20%",
    paddingVertical: "2%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Pet_screen7;
