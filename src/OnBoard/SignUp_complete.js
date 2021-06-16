import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-elements";

function SignUp_complete() {
  return (
    <View style={Styles.screen}>
      {/* Animated status bar */}

      <View style={Styles.status_bar}>
        <View style={Styles.bar} />
        <View style={Styles.bar} />
        <View style={Styles.bar} />
        <View style={Styles.bar} />
      </View>

      {/* Welcome text */}
      <View style={Styles.welcome_text_container}>
        <Text style={Styles.welcome_text_heading}>
          Welcome,{"\n"}Johnny Tran{" "}
        </Text>
        <Text style={Styles.welcome_text_subtext}>
          You can now start browsing and creating request!
        </Text>
      </View>

      {/* Users */}
      <View style={Styles.middle}>
        <View style={Styles.middle_container}>
          <View style={Styles.user_profile}>
            <View style={Styles.user_profile_header}>
              <View style={Styles.profile_pic}></View>
              <View style={Styles.name}>
                <Text style={{ fontSize: 14, color: "#011131" }}>
                  Amanda Jones
                </Text>
              </View>
              <View style={Styles.rides}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#011131",
                  }}
                >
                  Rides
                </Text>
              </View>
            </View>
            <View style={Styles.user_profile_middle}>
              <View style={Styles.miles}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#2D375B",
                  }}
                >
                  5 miles away
                </Text>
              </View>
            </View>
            <View style={Styles.user_profile_footer}>
              <View style={Styles.request}>
                <Text
                  style={{ fontSize: 12, color: "#64666D", marginBottom: 5 }}
                >
                  Request
                </Text>
                <Text style={{ fontSize: 12, color: "#000000" }}>
                  Doctor's Appointment
                </Text>
              </View>
              <View style={Styles.for}>
                <Text
                  style={{ fontSize: 12, color: "#64666D", marginBottom: 5 }}
                >
                  For
                </Text>
                <Text style={{ fontSize: 12, color: "#000000" }}>
                  March 5, 2:30
                </Text>
              </View>
            </View>
          </View>
          <View style={Styles.user_profile}>
            <View style={Styles.user_profile_header}>
              <View style={Styles.profile_pic}></View>
              <View style={Styles.name}>
                <Text style={{ fontSize: 14, color: "#011131" }}>
                  Amanda Jones
                </Text>
              </View>
              <View style={Styles.rides}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#011131",
                  }}
                >
                  Rides
                </Text>
              </View>
            </View>
            <View style={Styles.user_profile_middle}>
              <View style={Styles.miles}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#2D375B",
                  }}
                >
                  5 miles away
                </Text>
              </View>
            </View>
            <View style={Styles.user_profile_footer}>
              <View style={Styles.request}>
                <Text
                  style={{ fontSize: 12, color: "#64666D", marginBottom: 5 }}
                >
                  Request
                </Text>
                <Text style={{ fontSize: 12, color: "#000000" }}>
                  Doctor's Appointment
                </Text>
              </View>
              <View style={Styles.for}>
                <Text
                  style={{ fontSize: 12, color: "#64666D", marginBottom: 5 }}
                >
                  For
                </Text>
                <Text style={{ fontSize: 12, color: "#000000" }}>
                  March 5, 2:30
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <View style={Styles.get_started}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          <Text style={Styles.button_text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  status_bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bar: {
    width: 75,
    height: 3,
    backgroundColor: "#2D375B",
    marginTop: 30,
  },
  welcome_text_container: {
    flex: 2,
  },
  welcome_text_heading: {
    marginTop: "5%",
    color: "#2D385C",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "800",
  },
  welcome_text_subtext: {
    marginTop: "5%",
    color: "#64666D",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  middle: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  middle_container: {
    width: "85%",
    height: "95%",
    backgroundColor: "#DDE4FF",
    borderRadius: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "85%",
    height: "27%",
    position: "absolute",
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D375B",
    borderRadius: 30,
    borderColor: "#2D375B",
    borderWidth: 1,
    marginBottom: "30%",
  },
  button_text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "Lato-Regular",
  },
  buttonIcon: {
    position: "absolute",
    right: "80%",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  user_profile: {
    width: "85%",
    height: "40%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  user_profile_header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  profile_pic: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "pink",
    position: "absolute",
    top: -12,
    left: 10,
  },
  name: {
    position: "absolute",
    left: 57,
    width: "100%",
  },
  rides: {
    position: "absolute",
    right: 15,
    width: 65,
    height: 20,
    backgroundColor: "#E6F8D4",
    justifyContent: "center",
    borderRadius: 7,
  },
  user_profile_middle: {
    flex: 1,
    justifyContent: "center",
  },
  miles: {
    position: "absolute",
    top: 3,
    left: 10,
    width: 75,
    height: 20,
    backgroundColor: "#DDE4FF",
    justifyContent: "center",
    borderRadius: 7,
  },
  user_profile_footer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
  },
  request: {
    position: "absolute",
    left: 13,
  },
  for: {
    position: "absolute",
    right: 25,
  },
  get_started: {
    flex: 1.5,
    alignItems: "center",
  },
});

export default SignUp_complete;
