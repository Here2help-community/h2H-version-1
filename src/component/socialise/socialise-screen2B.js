import React, { useState } from "react";
import { View } from "react-native";
import Top_container from "./socialise-head";
import { StyleSheet, Text } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";

import TimePicker from "../timePicker/timePicker";
import formatDate from "../formatDate";

const Social_Screen2B = (props) => {
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Meridian, setMeridian] = useState(0);

  const hourHandler = (Hour) => {
    setHour(Hour);
    // console.log(Hour);
  };
  const minHandler = (Min) => {
    setMinute(Min);
    // console.log(Min);
  };
  const AmPmHandler = (AmPm) => {
    setMeridian(AmPm);
    // console.log(AmPm);
  };

  const data = { ...props.route.params };

  const getDate = data.selectedDate;
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top_box}>
        <Top_container
          title="Socialise"
          sub_head="Coffe meetup"
          detail_1={formatDate(props.route.params.selectedDate)}
          detail_2="What time do you request?"
        />
      </View>
      <View style={styles.mid_box}>
        <TimePicker
          getMin={minHandler}
          getHour={hourHandler}
          getMeridian={AmPmHandler}
        />
      </View>
      <View style={styles.bottom_box}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("socialscreen3B", {
              ...props.route.params,
              time: { Hour, Minute, Meridian },
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
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  mid_box: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottom_box: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "55%",
  },
});

export default Social_Screen2B;
