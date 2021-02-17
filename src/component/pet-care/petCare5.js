import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Top_container from "./head";
import PetTypePicker from "./PetTypePicker";

const Pet_screen5 = (props) => {
  const [PetType, SetType] = React.useState("");
  const typeHandler = (item) => {
    SetType(item);
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="What type of pet is it?"
        />
      </View>

      <View style={styles.midContainer}>
        <PetTypePicker petTypeGetter={typeHandler}></PetTypePicker>
      </View>
      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen6", {
              ...props.route.params,
              PetType,
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
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "2%",
    paddingTop: "5%",
    justifyContent: "center",

    paddingLeft: "60%",
  },
});

export default Pet_screen5;
