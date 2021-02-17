import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import CalenderComponent from "../CalenderComponent";
import Top_continer from "./Transport_head";

const Transport_screen2 = (props) => {
  const [selectedDate, setDate] = useState("");
  const ClickHander = (day) => {
    setDate(day);
  };

  console.log(props);

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      {/* Top Box */}
      <View style={styles.top_box}>
        <Top_continer
          title="Transportation"
          sub_head="Transport services"
          detail_2="What is your requested date?"
        />
      </View>

      <View style={styles.mid_box}>
        <CalenderComponent getDate={ClickHander} />
      </View>

      <View style={styles.bottom_box}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("Transport_screen3", {
              ...props.route.params,
              date: selectedDate,
            })
          }
        >
          <Text style={{ fontSize: 18 }}> Next</Text>
        </Dark_Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    padding: "1.8%",
  },
  top_box: {
    flex: 4,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    paddingTop: "2.8%",
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
    paddingLeft: "60%",
    paddingHorizontal: "2%",
  },
});
export default Transport_screen2;
