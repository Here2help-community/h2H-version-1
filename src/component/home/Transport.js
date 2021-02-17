import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import mediaStore from "../../MediaStore/mediaStore";

const Transport = (props) => {
  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  var url = firebase
    .storage()
    .ref(defaultString + "s8.png")
    .getDownloadURL()
    .then((url) => {
      mediaStore.dispatch({
        type: "addMedia",
        metadata: {
          name: "s8.png",
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
        navigation.navigate("transport_screen");
      }}
      activeOpacity={0.8}
      style={{ ...styles.card, ...props.style }}
    >
      {props.children}
      <Text style={styles.txt}>Transport</Text>
      <Image
        source={{
          width: "50%",
          height: "25%",
          uri:
            mediaStore.getState()["s8.png"] === undefined
              ? image0
              : mediaStore.getState()["s8.png"],
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
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%",
  },
  image: {
    position: "absolute",
    top: "3%",
    left: "45%",
    width: "50%",
    height: "92%",
  },
  txt: {
    margin: "7%",
  },
});

export default Transport;
