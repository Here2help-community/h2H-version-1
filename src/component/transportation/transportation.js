import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Picker from "./transport-picker";

const Transport_screen = (props) => {
  const navigation = useNavigation();

  const [Transporttype, SetType] = useState();
  const selectHandler = (item) => {
    SetType(item);
  };

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
        <Picker selectType={selectHandler} />
      </View>

      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("transport_screen2", {
              ...props.route.params,
              Transporttype,
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
  },
  container1: {
    flex: 0.5,
    width: "100%",
    alignSelf: "flex-start",
  },
  container2: {
    flex: 1.5,
    width: "100%",
  },
  container3: {
    flex: 0.88,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: "2%",
  },
  container4: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  container5: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  container6: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: "2%",
    paddingBottom: "5%",
    width: "100%",
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
