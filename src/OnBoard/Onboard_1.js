import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import AppText from "../component/AppText/AppText";
import { useNavigation } from "@react-navigation/native";

const Onboard_screen = (props) => {
  const navigation = useNavigation();

  const nav = () => {
    navigation.navigate("OnboardingScreen_2", {
      ...props.route.params,
    });
  };
  return (
    <View style={Styles.screen}>
      <ImageBackground
        source={require("./img/bottomLayer.png")}
        style={{
          flex: 4,
        }}
      >
        <Swiper
          style={{}}
          activeDotColor={"#CED3EE"}
          dotStyle={{
            borderWidth: 1,
            borderColor: "#CED3EE",
            width: 10,
            height: 10,
            marginLeft: 10,
          }}
          activeDotStyle={{
            width: 10,
            height: 10,
            marginLeft: 10,
          }}
          autoplay={true}
        >
          <View style={Styles.slides}>
            <Image
              resizeMode="contain"
              style={Styles.imageStyle}
              source={require("./img/topLayer1.png")}
            ></Image>
            <Text style={Styles.slideTextMain}>Welcome to Here2Help</Text>
            <Text style={Styles.slideTextSubtext}>
              Ask for help or give a hand, Let’s reconnect our communities!
            </Text>
          </View>
          <View style={Styles.slides}>
            <Image
              resizeMode="contain"
              style={Styles.imageStyle}
              source={require("./img/topLayer2.png")}
            ></Image>
            <Text style={Styles.slideTextMain}>Seek local volunteers</Text>
            <Text style={Styles.slideTextSubtext}>
              Get help with pet care, transportation, handywork and more!
            </Text>
          </View>
          <View style={Styles.slides}>
            <Image
              resizeMode="contain"
              style={Styles.imageStyle}
              source={require("./img/topLayer3.png")}
            ></Image>
            <Text style={Styles.slideTextMain}>Give back to the community</Text>
            <Text style={Styles.slideTextSubtext}>
              Become a volunteer and help locals with their tasks!
            </Text>
          </View>
        </Swiper>
      </ImageBackground>

      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={Styles.buttonType1}
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <Image
            style={Styles.buttonIcon}
            source={require("./img/googleIcon.png")}
          />
          <Text style={Styles.buttonText1}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonType2}
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <Image
            style={Styles.buttonIcon}
            source={require("./img/facebookIcon.png")}
          />
          <Text style={Styles.buttonText1}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.buttonType3} onPress={nav}>
          <Image
            style={Styles.buttonIcon}
            source={require("./img/emailIcon.png")}
          />
          <Text style={Styles.buttonText2}>Use email address</Text>
        </TouchableOpacity>

        <View style={Styles.footer}>
          <TouchableOpacity
            onPress={() => {
              console.log("You tapped the button!");
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#9D9FA8",
                fontSize: 16,
              }}
            >
              Terms of Use
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("You tapped the button!");
            }}
          >
            <Text style={{ color: "#596188", fontSize: 16, fontWeight: "700" }}>
              Sign up later
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("You tapped the button!");
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#9D9FA8",
                fontSize: 16,
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonIcon: {
    position: "absolute",
    right: "80%",
  },
  buttonText1: {
    fontSize: 17,
    fontWeight: "500",
    position: "absolute",
    left: "30%",
    color: "#596188",
    fontFamily: "Lato-Bold",
  },
  buttonText2: {
    fontSize: 17,
    fontWeight: "500",
    position: "absolute",
    left: "30%",
    color: "#FFFFFF",
    fontFamily: "Lato-Regular",
  },
  buttonType1: {
    width: "90%",
    height: "13%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderColor: "#596188",
    borderWidth: 1,
    marginTop: "5%",
  },
  buttonType2: {
    width: "90%",
    height: "13%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderColor: "#596188",
    borderWidth: 1,
  },
  buttonType3: {
    width: "90%",
    height: "13%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D375B",
    borderRadius: 25,
    borderColor: "#2D375B",
    borderWidth: 1,
    marginBottom: "30%",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: "85%",
    justifyContent: "space-evenly",
  },
  imageStyle: {
    width: "100%",
    height: "60%",
    marginTop: -35,
  },
  screen: {
    flex: 1,
  },
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  slideTextMain: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  slideTextSubtext: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    width: "75%",
    marginTop: "2%",
  },
});

export default Onboard_screen;
