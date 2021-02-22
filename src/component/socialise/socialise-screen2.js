import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Button2 from "../../Items/Buttons/light-bt";
import Colors from "../../Items/Colors";

const Social_Screen2 = (props) => {
  const navigation = useNavigation();

  const [choice, setChoice] = useState("");

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
        <Text style={styles.head}>Socialise</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Coffee meetup</Text>
      </View>
      <View style={styles.container3}>
        <Image
          source={require("../h2h/s5.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Select your preference</Text>
      </View>
      <View style={styles.container5}>
        <Text> </Text>
        <Dark_Button
          onPress={() => {
            setChoice("flexible with time and location");
            props.navigation.navigate("socialscreen1A", {
              ...props.route.params,
              choice,
            });
          }}
        >
          <Text>I am flexible with time and location</Text>
        </Dark_Button>

        <Text> </Text>
        <Button2
          onPress={() => {
            setChoice("specific time and location");
            props.navigation.navigate("socialscreen1B", {
              ...props.route.params,
              choice,
            });
          }}
        >
          <Text>I have a specific time and location</Text>
        </Button2>
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
  top: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingTop: "3%",
  },
  container1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    width: "100%",
  },
  container2: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  container3: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  container4: {
    flex: 1.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  container5: {
    paddingTop: "1%",
    flex: 6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },

  head: {
    fontSize: 25,
    fontWeight: "bold",

    color: Colors.primary1,
  },
  head2: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary2,
  },
  head3: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary2,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Social_Screen2;
