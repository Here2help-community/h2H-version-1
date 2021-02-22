import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import mediaStore from "../../MediaStore/mediaStore";

const Handy = (props) => {
  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  var url = firebase
    .storage()
    .ref(defaultString + "s7.png")
    .getDownloadURL()
    .then((url) => {
      mediaStore.dispatch({
        type: "addMedia",
        metadata: {
          name: "s7.png",
          url,
        },
      });
      setImage(url);
      // return url
    })
    .catch(function (error) {
      // Handle any errors
    });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("handywork_screen");
      }}
      activeOpacity={0.8}
      style={{ ...styles.card, ...props.style }}
    >
      {props.children}
      <Text style={styles.txt}>HandyWork</Text>
      <Image
        source={{
          width: "50%",
          height: "25%",
          uri:
            mediaStore.getState()["s7.png"] === undefined
              ? image0
              : mediaStore.getState()["s7.png"],
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    height: "100%",
  },
  image: {
    position: "absolute",
    left: "41%",
    width: "60%",
    height: "95%",
  },
  txt: {
    margin: "7%",
  },
});

export default Handy;
