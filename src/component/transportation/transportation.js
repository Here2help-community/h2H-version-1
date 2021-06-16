import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../Items/Colors";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Picker from "./transport-picker";
import WheelPicker from "../WheelPicker/WheelPicker";

const data = [
  { label: "Destination", value: "Destination" },
  { label: "Event", value: "Event" },
  { label: "Doctors appointment", value: "Doctors appointment" },
  { label: "Function", value: "Function" },
  { label: "Shopping", value: "Shopping" },
  { label: "Professional ride", value: "Professional ride" },
  { label: "Emergency", value: "Emergency" },
  { label: "Test", value: "Test" },
];

const INITIAL_INDEX = 3;

const Transport_screen = (props) => {
  const navigation = useNavigation();

  const [Transporttype, SetType] = useState();
  const selectHandler = (item) => {
    SetType(item);
  };
  const [selected, setSelected] = useState(data[INITIAL_INDEX].label);

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>Transportation</Text>
      </View>

      <View style={styles.container2}>
        <Image
          source={require("../h2h/s8.png")}
          resizeMode="contain"
          style={{
            width: "55%",
            height: "95%",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.head2}>
          Need a ride to a doctors appointment?Want to carpool to a local event
          and save emissions?
        </Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Select type of transport activity</Text>
      </View>
      <View style={styles.container5}>
        {/* <Picker selectType={selectHandler}/> */}
        <WheelPicker
          containerStyle={{
            width: "100%",
            height: 306,
            alignSelf: "center",
          }}
          itemStyle={{
            height: 34,
            padding: 4,
          }}
          textStyle={{
            fontSize: 23,
            textAlign: "center",
          }}
          data={data}
          setSelected={setSelected}
          initialIndex={INITIAL_INDEX}
        />
      </View>

      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("transport_screen2", {
              ...props.route.params,
              selected,
            })
          }
        >
          <Text>Request for Socialise</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "1.5%",
  },
  top: {
    flex: 0.85,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  container1: {
    flex: 0.5,
    width: "100%",

    alignSelf: "flex-start",
    // backgroundColor: '#fcba03',
  },
  container2: {
    flex: 1.5,
    width: "100%",
    // backgroundColor: '#8a53b8',
  },
  container3: {
    flex: 0.88,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: "2%",
    // backgroundColor: '#8af249',
  },
  container4: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    // backgroundColor: '#59e6f0',
  },
  container5: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: 'red',
    //  backgroundColor: '#b5ad98',
  },
  container6: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: "2%",
    paddingBottom: "5%",
    width: "100%",
    // backgroundColor: '#e83354',
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "center",
    fontSize: 18,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 18.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Transport_screen;
