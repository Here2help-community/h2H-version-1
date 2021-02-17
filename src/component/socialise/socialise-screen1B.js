import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import CalenderComponent from "../CalenderComponent";
import Top_container from "./socialise-head";

const Social_Screen1B = (props) => {
  const [selectedDate, setDate] = useState("");
  const changeDate = (day) => {
    setDate(day);
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top_box}>
        <Top_container
          title="Socialise"
          sub_head="Coffee meetup"
          detail_2="What is your requested date?"
        />
      </View>
      <View style={styles.mid_box}>
        <CalenderComponent getDate={changeDate} />
      </View>
      <View style={styles.bottom_box}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("socialscreen2B", {
              ...props.route.params,
              selectedDate,
            })
          }
        >
          <Text style={{ fontSize: 18 }}> Next</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.6%",
    paddingTop: "7%",
    backgroundColor: "#ffffff",
  },
  top_box: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  mid_box: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottom_box: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingLeft: "58%",
    paddingHorizontal: "2%",
  },
});

export default Social_Screen1B;
