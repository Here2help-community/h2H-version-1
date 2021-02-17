import React, { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import AppText from "../component/AppText/AppText";
import InputField from "../component/InputField/InputField";
import Dark_Button from "../Items/Buttons/dark-bt";
import useValidation from "../utils/customHooks/validation";
import { _setPlaceHolderColor } from "./methods";
import styles from "./OnboardStyles";

const Onboard_screen3 = (props) => {
  const [password, setPass] = useState("");
  const [vPassword, setvPass] = useState("");
  const [errorField, errorFieldMessage, isValid] = useValidation({
    password,
    vPassword,
  });

  // setImage(getMedia('img/vector1.png'))

  var defaultString = ".root/in-app-media/";

  const submitHandler = () => {
    if (!isValid()) {
      return false;
    }
    props.navigation.navigate("OB4", { ...props.route.params, password });
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
            <AppText style={styles.head}>One last thing!</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.field_group}>
            <InputField
              label={"Enter your Password"}
              secureTextEntry={true}
              placeholder={"Enter here"}
              placeholderTextColor={_setPlaceHolderColor(
                "password",
                errorField
              )}
              onChangeText={setPass}
              error={errorField === "password" && errorFieldMessage}
            ></InputField>
          </View>

          <View style={styles.field_group}>
            <InputField
              label={"Verify Password"}
              secureTextEntry={true}
              placeholder={"Enter here"}
              placeholderTextColor={_setPlaceHolderColor(
                "vPassword",
                errorField
              )}
              onChangeText={setvPass}
              error={errorField === "vPassword" && errorFieldMessage}
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
            <View style={styles.progress_bar}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen3;
