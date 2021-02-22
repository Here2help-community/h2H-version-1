import firebase from "firebase";
import React, { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { EMAIL_PASSWORD_AUTH, SIGN_IN } from "../asyncStorage/actionsList";
import store_redux_thunk from "../asyncStorage/store";
import AppText from "../component/AppText/AppText";
import InputField from "../component/InputField/InputField";
import Dark_Button from "../Items/Buttons/dark-bt";
import useValidation from "../utils/customHooks/validation";
import { _setPlaceHolderColor } from "./methods";
import styles from "./OnboardStyles";

const Onboard_screen4 = (props) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorField, errorFieldMessage, isValid] = useValidation({
    address,
    phone,
  });

  // hooks for media
  const [image0, setImage] = useState("");

  var defaultString = ".root/in-app-media/";

  const email = props.route.params.email;
  const password = props.route.params.password;
  const fullName = props.route.params.fName + " " + props.route.params.lName;

  // Save user
  const submitHandler = () => {
    if (!isValid()) {
      return false;
    }

    store_redux_thunk.dispatch((dispatch) => {
      dispatch({ type: "showload" });
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        const uid = user.uid;

        const db = firebase.firestore();

        db.collection("users")
          .doc(uid)
          .set(
            {
              fullName,
              email,
              phone,
              address,
            },
            { merge: true }
          )
          .then((data) => {
            //success callback
            store_redux_thunk.dispatch((dispatch) => {
              dispatch({
                type: SIGN_IN,
                token: user,
                authType: EMAIL_PASSWORD_AUTH,
              });
            });
          })
          .catch(function (error) {
            console.error("Error---->", error);
          });
      })
      .catch((error) => {
        console.error("you got ", error);
      });
  };

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{
                width: 89,
                height: 89,
                resizeMode: "contain",
              }}
            />
          </View>

          <View style={styles.title}>
            <AppText style={styles.head}>Start your profile</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.field_group}>
            <InputField
              label={"Address"}
              secureTextEntry={false}
              placeholder={"Enter here"}
              placeholderTextColor={_setPlaceHolderColor("address", errorField)}
              onChangeText={setAddress}
              error={errorField === "address" && errorFieldMessage}
            ></InputField>
          </View>

          <View style={styles.field_group}>
            <InputField
              label={"Telephone"}
              secureTextEntry={false}
              placeholder={"Enter here"}
              placeholderTextColor={_setPlaceHolderColor("phone", errorField)}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              error={errorField === "phone" && errorFieldMessage}
            ></InputField>
          </View>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigation_control}>
            <View style={{ width: "30%", alignSelf: "flex-end" }}>
              <Dark_Button onPress={submitHandler}>Next</Dark_Button>
            </View>
          </View>

          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen4;
