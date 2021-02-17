import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Items/Colors";

const Top_container = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
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
        <Text style={styles.head}>{props.title} </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>{props.sub_head} </Text>
      </View>

      <View style={styles.container3}>
        <Image
          resizeMode="contain"
          style={{
            height: "100%",
            width: "27%",
            alignSelf: "center",
          }}
          source={require("../../Items/Icons/calender.jpeg")}
        />
      </View>

      <View style={styles.container4}>
        <Text style={styles.head2}>{props.detail_1} </Text>
        <Text style={styles.head2}>{props.detail_2} </Text>
        <Text style={styles.head2}>{props.detail_3}</Text>
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
    backgroundColor: "#ffffff",
  },
  top: {
    flex: 0.85,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
  },

  container1: {
    flex: 0.6,
    width: "100%",
    flexDirection: "column",
  },

  container2: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
  },

  container3: {
    flex: 1.8,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
  },

  container4: {
    flex: 1.4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },

  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.secondary2,
  },

  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },

  head2: {
    alignSelf: "flex-start",
    fontSize: 19,
    color: Colors.primary2,
  },

  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Top_container;
