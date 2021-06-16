import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import Volunteer from "../component/Volunteer";
import Victim from "../component/Help-need";
import Chat_Screen from "../servises/chat/chat";
import Browsing_Screen from "../servises/browsing-requests/browsing-screen";
import Request_Screen from "../servises/request-screen/request-screen";

import ProfileScreen from '../component/profile/Profile';
import FeedbackScreen from '../component/profile/Feedback';
import SettingsScreen from '../component/profile/Settings';
import Terms_component from '../component/profile/Terms';
import PrivacyScreen from '../component/profile/Privacy';
import EditProfileScreen from '../component/profile/EditProfile';

import Colors from "../Items/Colors";
import AppText from "../component/AppText/AppText";

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  // Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

const ScreenConstant = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarLabelOpts = (label) => {
  return ({ focused, color }) => {
    return (
      <AppText
        style={{
          fontSize: 12,
          color: Colors.primary1,
          transform: [{ translateY: -12 }],
          textAlign: "center",
        }}
      >
        {label}
      </AppText>
    );
  };
};

function Profile_component() {
  return(

  <ScreenConstant.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    }}> 
      <ScreenConstant.Screen name='profile' component={ProfileScreen} />
      <ScreenConstant.Screen name='feedback' component={FeedbackScreen} />
      <ScreenConstant.Screen name='settings' component={SettingsScreen} />
      <ScreenConstant.Screen name='terms' component={Terms_component} />
      <ScreenConstant.Screen name='privacy' component={PrivacyScreen} />
      <ScreenConstant.Screen name='editProfile' component={EditProfileScreen} />
  </ScreenConstant.Navigator>
  )
}

export default function MyTabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.primary1,
        inactiveTintColor: Colors.inactive,
        style: {
          backgroundColor: "#FFFFFE",
          height: Platform.OS === "ios" ? 100 : 85,
          marginTop: 20,
          paddingTop: 7,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../Items/Icons/home_active.png")
                    : require("../Items/Icons/home_inactive.png")
                }
                style={styles.image}
              />
            );
          },
          tabBarLabel: tabBarLabelOpts("Home"),
        }}
        name="Home"
        component={Volunteer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../Items/Icons/browse_active.png")
                    : require("../Items/Icons/browse_inactive.png")
                }
                style={styles.image}
              />
            );
          },
          tabBarLabel: tabBarLabelOpts("Browse"),
        }}
        name="Browse"
        component={Browsing_Screen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const width = size * 2;
            const height = width;
            const borderRadius = width * 0.5;

            const shadow_width = width * 1.4;
            const shadow_height = height * 1.4;
            const shadow_radius = shadow_width * 0.5;

            return (
              <View
                style={{
                  borderRadius: shadow_radius,
                  width: shadow_width,
                  height: shadow_height,
                  justifyContent: "center",
                  transform: [{ translateY: -size * 0.75 }],
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.primary1,
                    borderRadius: borderRadius,
                    width: width,
                    height: height,
                    justifyContent: "center",
                    // transform: [{ translateY: -size*0.75, }],
                    alignSelf: "center",
                    shadowColor: "#7F89AD",
                    shadowOpacity: 0.5,
                    shadowRadius: width * 0.3,
                  }}
                >
                  <AppText
                    style={{
                      color: "white",
                      fontSize: size * 1.5,
                      textAlign: "center",
                    }}
                  >
                    +
                  </AppText>
                </View>
                {Platform.OS !== "ios" ? (
                  <View
                    style={{
                      position: "absolute",
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0}
                      onPress={() => {
                        props.navigation.navigate("Request");
                      }}
                    >
                      <Svg width={shadow_width} height={shadow_height}>
                        <Defs>
                          <RadialGradient
                            id="grad"
                            cx="50%"
                            cy="50%"
                            rx="50%"
                            ry="50%"
                            fx="50%"
                            fy="50%"
                            gradientUnits="userSpaceOnUse"
                          >
                            <Stop
                              offset="0%"
                              stopColor="#7F89AD"
                              stopOpacity="0"
                            />
                            <Stop
                              offset="80%"
                              stopColor="#7F89AD"
                              stopOpacity="0.3"
                            />
                            <Stop
                              offset="100%"
                              stopColor="#7F89AD"
                              stopOpacity="0"
                            />
                          </RadialGradient>
                        </Defs>
                        <Circle
                          cx={shadow_radius}
                          cy={shadow_radius}
                          r={shadow_radius}
                          fill="url(#grad)"
                        />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{ position: "absolute" }}></View>
                )}
              </View>
            );
          },
          tabBarLabel: tabBarLabelOpts("Create Request"),
        }}
        name="Request"
        component={Request_Screen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../Items/Icons/chat_active.png")
                    : require("../Items/Icons/chat_inactive.png")
                }
                style={styles.image}
              />
            );
          },
          tabBarLabel: tabBarLabelOpts("Chat"),
          tabBarBadge: null,
          tabBarBadgeStyle: {
            backgroundColor: Colors.error,
            color: "white",
          },
        }}
        name="Settings"
        component={Chat_Screen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../Items/Icons/profile_active.png")
                    : require("../Items/Icons/profile_inactive.png")
                }
                style={styles.image}
              />
            );
          },
          tabBarLabel: tabBarLabelOpts("Profile"),
        }}
        name="Profile"
        component={Profile_component}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Platform.OS === "ios" ? 30 : 24,
    height: Platform.OS === "ios" ? 30 : 24,
    resizeMode: "contain",
  },
});
