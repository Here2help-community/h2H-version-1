import React, { useState, useReducer, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import firebase from "firebase";

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";
import { Value } from "react-native-reanimated";
import mediaStore from '../MediaStore/mediaStore'


const Onboard_screen2 = (props) => {
  // const [btnText, setBtn] = useState("Next");
  // const checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setMess("(logged in)");
  //       setBtn("Sign Out");
  //     } else {
  //       setMess("");
  //       setBtn("Next");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   checkIfLoggedIn();
  // });
  const [message, setMess] = useState("");
  const [email, setEmail] = useState("");

  // hooks for media
  const [image0, setImage] = useState(' ');

  // setImage(getMedia('img/vector2.png'))

  var defaultString = '.root/in-app-media/';
  // console.log(defaultString + mediaLocation);
  var url = firebase.storage().ref(defaultString + 'vector2.png').getDownloadURL()
    .then(url => {
      mediaStore.dispatch({
        type: 'addMedia',
        metadata: {
          name: 'vector2.png',
          url
        }
      })
      setImage(url)
      // return url
    })
    .catch(function (error) {
      // Handle any errors
    });


  const submitHandler = () => {
    props.navigation.navigate("OB3", { ...props.route.params, email });
    //   {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //       console.log("User account created & signed in!");
    //       setEmail("");
    //       setPass("");
    //     })
    //     .catch((error) => {
    //       if (error.code === "auth/email-already-in-use") {
    //         console.log("That email address is already in use!");
    //       }

    //       if (error.code === "auth/invalid-email") {
    //         console.log("That email address is invalid!");
    //       }

    //       console.error("you got ", error);
    //     });
    // }
  };

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container1}>
        <Image
          source={{
            width: "60%",
            height: "100%",
            uri: mediaStore.getState()['vector2.png'] === undefined ? image0 : mediaStore.getState()['vector2.png']

          }}
          resizeMode={"stretch"}
          style={{
            bottom: "10%"
          }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.head}>Almost There! {message}</Text>
      </View>

      <View style={styles.container3}>
        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Enter your email</Text>
          <TextInput
            keyboardType="email-address"
            value={email}
            style={styles.input}
            placeholder={"  Enter Here"}
            onChangeText={(val) => {
              // console.log("changed email");
              setEmail(val);
            }}
          />
        </View>
      </View>
      {/* <View style={styles.container3}> */}
      {/* <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Enter your Password</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            style={styles.input}
            placeholder={"  Enter Here"}
            onChangeText={(val) => {
              // console.log("changed password");
              setPass(val);
            }}
          />
        </View>
      </View> */}

      <View style={styles.container4}>
        <Dark_Button onPress={submitHandler}>Next</Dark_Button>
      </View>

      <View style={styles.container5}>
        <View style={styles.line2}></View>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    // backgroundColor: '#99927d',
  },
  container1: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: '#C68F8F'
  },
  container2: {
    flex: 1.1,
    width: "100%",
    paddingHorizontal: "4%",
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: '#8FB6C6'
  },
  container3: {
    flex: 1.1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: "4%",
    // backgroundColor: '#F692A6'
  },
  container4: {
    flex: 1.05,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "58%",
    paddingHorizontal: "3%",
    // backgroundColor: '#B58FC6'
  },
  container5: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: '#1D9F71'
  },
  head: {
    fontSize: 42,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  line: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.primary1,
  },
  line2: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.disabledbutton,
  },
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Onboard_screen2;
