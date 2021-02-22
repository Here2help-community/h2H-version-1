import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useKeyboard } from "react-native-keyboard-height";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Top_container from "./socialise-head";

const screenHeight = Dimensions.get("window").height;

const Social_Screen7 = (props) => {
  const [value, onChangeText] = useState();

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
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={topstyling(topFlex)}>
        <Top_container
          title="Socialise"
          sub_head="Coffee meetup"
          detail_2="Add a short note to your request"
        />
      </View>
      <View style={midstyling(midFlex)}>
        <TextInput
          autoFocus={true}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          placeholder={"Enter Text"}
        />
      </View>
      <View style={bottomstyling(bottomFlex)}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("socialscreen2A", {
              ...props.route.params,
              note: value,
            })
          }
        >
          <Text style={{ fontSize: 18 }}> Next</Text>
        </Dark_Button>
      </View>
    </SafeAreaView>
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
    padding: "1.8%",
    backgroundColor: "#ffffff",
    paddingTop: "7%",
  },
  top_box: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgb(25,5,120)",
  },
  mid_box: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    paddingTop: "20%",
    paddingHorizontal: "1%",
  },
  bottom_box: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "55%",
  },
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default Social_Screen7;
