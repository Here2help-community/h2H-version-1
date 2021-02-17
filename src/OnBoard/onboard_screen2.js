import React, { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import AppText from "../component/AppText/AppText";
import InputField from "../component/InputField/InputField";
import Dark_Button from "../Items/Buttons/dark-bt";
import useValidation from "../utils/customHooks/validation";
import { _setPlaceHolderColor } from "./methods";
import styles from "./OnboardStyles";

const Onboard_screen2 = (props) => {
  const [message, setMess] = useState("");
  const [email, setEmail] = useState("");
  const [errorField, errorFieldMessage, isValid] = useValidation({ email });

  // hooks for media
  const [image0, setImage] = useState(" ");

  var defaultString = ".root/in-app-media/";

  const submitHandler = () => {
    if (!isValid()) {
      return false;
    }
    props.navigation.navigate("OB3", { ...props.route.params, email });
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
            <AppText style={styles.head}>Almost There! {message}</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.field_group}>
            <InputField
              label={"Enter your email"}
              secureTextEntry={false}
              placeholder={"Enter here"}
              placeholderTextColor={_setPlaceHolderColor("email", errorField)}
              onChangeText={setEmail}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              error={errorField === "email" && errorFieldMessage}
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
            <View style={styles.progress_bar}></View>
            <View style={styles.progress_bar}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen2;
