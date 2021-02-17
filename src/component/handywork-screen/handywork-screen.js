import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Picker from "./handy-picker";

const HandyWork_Screen = (props) => {
  const navigation = useNavigation();
  const [type, SetType] = useState();

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
            {/* Icon */}
            <Feather name="chevron-left" size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>HandyWork</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={require("../h2h/s7.png")}
          resizeMode="contain"
          style={{
            width: "60%",
            height: "95%",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.head2}>
          {""}
          Lawn too tall? Garder Filled with weeds? Drain plugged? someone near
          by has a hand to offer.
        </Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Select type of Handywork</Text>
      </View>

      <View style={styles.container5}>
        <Picker selectType={selectHandler} />
      </View>

      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("handyWorkScreen2", {
              ...props.route.params,
              type,
            })
          }
        >
          <Text style={{ fontWeight: "bold" }}>Request For HandyWork</Text>
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
    margin: "1.8%",
    marginTop: "7%",
  },
  top: {
    flex: 0.85,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  container1: {
    flex: 0.55,
    width: "100%",
    alignSelf: "flex-start",
  },

  container2: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  container3: {
    flex: 1.2,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "2%",
  },
  container4: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container5: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  container6: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
  head: {
    color: Colors.primary1,
    fontSize: 26,
    fontWeight: "bold",
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 20,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default HandyWork_Screen;
