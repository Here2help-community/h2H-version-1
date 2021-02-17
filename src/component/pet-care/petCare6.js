import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useKeyboard } from "react-native-keyboard-height";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Top_container from "./head";

const screenHeight = Dimensions.get("window").height;

const Pet_screen6 = (props) => {
  const [value, onChangeText] = useState("");

  // for dynamic flex
  const [topFlex, setTopFlex] = useState(5);
  const [midFlex, setMidFlex] = useState(4);
  const [bottomFlex, setBottomFlex] = useState(1);

  //
  const [kbHeight, setKbHeight] = useState(screenHeight);

  const didShow = (height) => {
    // setViewHeight(screenHeight - height);
    // height divide by height of container
    setKbHeight(
      height / screenHeight - StatusBar.currentHeight - 0.088 * screenHeight
    );
    //keyboard height ratio to the main height stored in const as not refreshed imm
    const kbhFactor = kbHeight;
    // console.log(kbhFactor);

    setBottomFlex(bottomFlex - (kbhFactor * bottomFlex) / 5);

    setMidFlex(midFlex - (3 * kbhFactor * midFlex) / 4);
  };

  const didHide = () => {
    //giving default flex back
    setBottomFlex(1);
    setTopFlex(5);
    setMidFlex(4);
  };

  const [keyboardHeigth] = useKeyboard(
    didShow,
    didHide
  ); /* initialize the hook (optional parameters) */

  useEffect(() => {}, [keyboardHeigth]);

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={topstyling(topFlex)}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="What is your pet's name?"
        />
      </View>
      <View style={midstyling(midFlex)}>
        <TextInput
          autoCapitalize="sentences"
          autoFocus={true}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={"Enter Text"}
        />
      </View>
      <View style={bottomstyling(bottomFlex)}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen7", {
              ...props.route.params,
              petName: value,
            })
          }
        >
          <Text> Next</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const topstyling = (dFlex) => {
  return { flex: dFlex, width: "100%" };
};
const midstyling = (dflex) => {
  return {
    flex: dflex,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
  };
};
const bottomstyling = (dFlex) => {
  return {
    flex: dFlex,
    width: "100%",

    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingTop: "5%",
    paddingLeft: "60%",
  };
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
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Pet_screen6;
