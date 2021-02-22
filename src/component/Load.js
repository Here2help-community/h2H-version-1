import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Dark_Button from "../Items/Buttons/dark-bt";
import Button2 from "../Items/Buttons/light-bt";
import mediaStore from "../MediaStore/mediaStore";

const Loadscreen = (props) => {
  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  var url = firebase
    .storage()
    .ref(defaultString + "load1.png")
    .getDownloadURL()
    .then((url) => {
      mediaStore.dispatch({
        type: "addMedia",
        metadata: {
          name: "load1.png",
          url,
        },
      });
      setImage(url);
      // return url
    })
    .catch(function (error) {
      // Handle any errors
    });

  return (
    <View style={styles.load}>
      <Image
        source={{
          width: "50%",
          height: "25%",
          uri:
            mediaStore.getState()["load1.png"] === undefined
              ? image0
              : mediaStore.getState()["load1.png"],
        }}
        resizeMode={"stretch"}
        style={{
          bottom: "10%",
        }}
      />
      <Text style={styles.intro}>
        Here 2 Help connects volunteers with people who need help completing
        different tasks.
      </Text>
      <View style={styles.Button}>
        <Dark_Button onPress={() => props.navigation.navigate("vol")}>
          I'm Here to Volunteer
        </Dark_Button>
        <View style={styles.space} />
        <Button2 onPress={() => props.navigation.navigate("Victim")}>
          I need Help
        </Button2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    bottom: "13%",
  },
  intro: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    padding: "6%",
  },
  Button: {
    width: "100%",
    top: "15%",
    paddingHorizontal: "8%",
  },
  space: {
    padding: 5,
  },
});

export default Loadscreen;
