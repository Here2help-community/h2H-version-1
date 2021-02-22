import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import mediaStore from "../../MediaStore/mediaStore";

const Pet = (props) => {
  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  var url = firebase
    .storage()
    .ref(defaultString + "s6.png")
    .getDownloadURL()
    .then((url) => {
      mediaStore.dispatch({
        type: "addMedia",
        metadata: {
          name: "s6.png",
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
        navigation.navigate("pet_screen");
      }}
      activeOpacity={0.6}
      style={{ ...styles.card, ...props.style }}
    >
      {props.children}
      <Text style={styles.txt}>pet</Text>
      <Image
        source={{
          width: "50%",
          height: "25%",
          uri:
            mediaStore.getState()["s6.png"] === undefined
              ? image0
              : mediaStore.getState()["s6.png"],
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
    top: "5%",
    left: "44%",
    width: "65%",
    height: "100%",
  },
  txt: {
    margin: "7%",
  },
});

export default Pet;
