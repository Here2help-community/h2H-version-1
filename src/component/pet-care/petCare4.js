import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Top_container from "./head";

const Pet_screen4 = (props) => {
  const [value, setValue] = React.useState("Either is fine");

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="Location for pet sitting?"
        />
      </View>

      <View style={styles.midContainer}>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <View style={styles.radioOption}>
            <RadioButton color="#2D375B" value="In my home" />
            <Text style={styles.head4}>In my home</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton color="#2D375B" value="Outside my home" />
            <Text style={styles.head4}>Outside my home</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton color="#2D375B" value="Either is fine" />
            <Text style={styles.head4}>Either is fine</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen5", {
              ...props.route.params,
              location: value,
            })
          }
        >
          <Text> Next</Text>
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
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
  },
  radioOption: {
    paddingLeft: "20%",
    paddingVertical: "2%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  head4: {
    alignSelf: "center",
    fontSize: 19,
    color: Colors.primary2,
  },
});

export default Pet_screen4;
