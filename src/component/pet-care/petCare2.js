import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import CalenderComponent from "../CalenderComponent";
import Top_container from "./head";

const Pet_screen2 = (props) => {
  const [selectedDate, setDate] = React.useState("");
  const ClickHander = (day) => {
    setDate(day);
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="What is your requested date?"
        />
      </View>

      <View style={styles.midContainer}>
        <CalenderComponent getDate={ClickHander} />
      </View>

      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen3", {
              ...props.route.params,
              date: selectedDate,
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
    backgroundColor: "#ffffff",
  },

  topContainer: {
    flex: 4,
    width: "100%",
  },
  midContainer: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
  },
});

export default Pet_screen2;
