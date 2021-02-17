import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Picker from "./picker";

const Pet_Screen = (props) => {
  const navigation = useNavigation();
  const [CareType, SetCare] = React.useState("");
  const typeHandler = (item) => {
    SetCare(item);
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
        <Text style={styles.head}>Pet Care</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={require("../h2h/s6.png")}
          resizeMode="contain"
          style={{
            width: "65%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.container3}>
        {/* Puting the whole text in a single tag
          helps wrap things properly in every phone tested. 
          new and old phones both. 
          though emulator never showed any problems but
          practical phones did
        */}
        <Text style={styles.head2}>
          {""}
          All of our best friends require some extra TLC. That can mean
          grooming, pet-setting, pet walking.
        </Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Select type of Pet Care</Text>
      </View>
      <View style={styles.container5}>
        <Picker careTypeGetter={typeHandler} />
      </View>
      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen2", {
              ...props.route.params,
              CareType,
            })
          }
        >
          <Text> Next</Text>
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
    paddingTop: "7%",
    padding: "1.8%",
  },
  top: {
    flex: 0.55,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  container1: {
    flex: 0.5,
    width: "100%",
  },
  container2: {
    flex: 2.5,
    flexDirection: "column",
    width: "100%",
  },
  container3: {
    flex: 1.1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "2%",
  },
  container4: {
    flex: 0.53,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  container5: {
    flex: 3,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  container6: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "2%",
    paddingBottom: "5%",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 18.5,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Pet_Screen;
