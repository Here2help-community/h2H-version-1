import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import mediaStore from "../../MediaStore/mediaStore";

const Social = (props) => {
  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  var url = firebase
    .storage()
    .ref(defaultString + "s5.png")
    .getDownloadURL()
    .then((url) => {
      mediaStore.dispatch({
        type: "addMedia",
        metadata: {
          name: "s5.png",
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
        navigation.navigate("social_screen");
      }}
      activeOpacity={0.6}
      style={styles.Social}
    >
      {props.children}
      <Text style={styles.txt}>Socializing</Text>
      <Image
        source={{
          width: "50%",
          height: "25%",
          uri:
            mediaStore.getState()["s5.png"] === undefined
              ? image0
              : mediaStore.getState()["s5.png"],
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Social: {
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
    alignSelf: "flex-end",
    width: "50%",
    height: "100%",
  },
  txt: {
    margin: "7%",
  },
});

export default Social;
