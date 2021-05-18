import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import { Icon } from "react-native-elements";
import AppText from "../component/AppText/AppText";

const Onboard_screen = () => {
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
              style={{
                width: "100%",
                height: "65%",
                borderColor: "black",
                borderWidth: 5,
                resizeMode: "contain",
              }}
              source={require("./img/topLayer1.png")}
            ></Image>
            <Text style={Styles.slideTextMain}>Welcome to Here2Help</Text>
            <Text style={Styles.slideTextSubtext}>
              Ask for help or give a hand, Let’s reconnect our communities!
            </Text>
          </View>
          <View style={Styles.slides}>
            <Image
              style={{
                width: "100%",
                height: "65%",
                borderColor: "black",
                borderWidth: 5,
              }}
              source={require("./img/topLayer2.png")}
            ></Image>
            <Text style={Styles.slideTextMain}>Seek local volunteers</Text>
            <Text style={Styles.slideTextSubtext}>
              Get help with pet care, transportation, handywork and more!
            </Text>
          </View>
          <View style={Styles.slides}>
            <Image
              style={{
                width: "100%",
                height: "65%",
                borderColor: "black",
                borderWidth: 5,
              }}
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
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <View style={Styles.buttonType1}>
            <Image
              style={Styles.buttonIcon}
              source={require("./img/googleIcon.png")}
            />
            <Text style={Styles.buttonText1}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <View style={Styles.buttonType2}>
            <Image
              style={Styles.buttonIcon}
              source={require("./img/facebookIcon.png")}
            />
            <Text style={Styles.buttonText1}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <View style={Styles.buttonType3}>
            <Image
              style={Styles.buttonIcon}
              source={require("./img/emailIcon.png")}
            />
            <Text style={Styles.buttonText2}>Use email address</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const Styles = StyleSheet.create({
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
    marginTop: 10,
  },
  buttonIcon: {
    position: "absolute",
    left: 50,
  },
  buttonType1: {
    width: 390,
    height: 50,
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
    width: 390,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderColor: "#596188",
    borderWidth: 1,
  },
  buttonType3: {
    width: 390,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2D375B",
    borderRadius: 25,
    borderColor: "#2D375B",
    borderWidth: 1,
    marginBottom: "30%",
  },
  buttonText1: {
    fontSize: 17,
    fontWeight: "500",
    position: "absolute",
    left: 120,
    color: "#596188",
  },
  buttonText2: {
    fontSize: 17,
    fontWeight: "500",
    position: "absolute",
    left: 120,
    color: "#FFFFFF",
  },
});

export default Onboard_screen;
