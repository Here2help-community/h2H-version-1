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
import mediaStore from '../MediaStore/mediaStore';
import styles from './OnboardStyles';
import InputField from "../component/InputField/InputField";
import AppText from '../component/AppText/AppText';


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
  // var url = firebase.storage().ref(defaultString + 'vector2.png').getDownloadURL()
  //   .then(url => {
  //     mediaStore.dispatch({
  //       type: 'addMedia',
  //       metadata: {
  //         name: 'vector2.png',
  //         url
  //       }
  //     })
  //     setImage(url)
  //     // return url
  //   })
  //   .catch(function (error) {
  //     // Handle any errors
  //   });


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
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 89,
                height: 89,
                resizeMode: 'contain',
              }}
            />
          </View>

          <View style={styles.title}>
            <AppText style={styles.head}>Almost There! {message}</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.field_group}>
            <InputField
              label={'Enter your email'}
              secureTextEntry={false}
              placeholder={'Enter here'}
              placeholderTextColor={ Colors.secondary2 }
              onChangeText={ setEmail }
              keyboardType={'email-address'}
            >
            </InputField>
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

        <View style={styles.navigation}>
          <View style={styles.navigation_control}>
            <View style={{ width: '30%', alignSelf: 'flex-end', }}>
              <Dark_Button onPress={submitHandler}>Next</Dark_Button>
            </View>
          </View>

          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar}></View>
            <View style={styles.progress_bar}></View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen2;
