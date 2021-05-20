import React, { useState } from "react";
import { AppLoading } from "expo";

import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../asyncStorage/actionsList";
import store from "../asyncStorage/store"

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import Onboard from "../OnBoard/Onboard";

import SignUp_Screen_1 from "../OnBoard/onboard_screen1";
import SignUp_Screen_2 from "../OnBoard/onboard_screen2";
import SignUp_Screen_3 from "../OnBoard/onboard_screen3";
import SignUp_Screen_4 from "../OnBoard/onboard_screen4";

import Loadscreen from "../component/Load";
import Volunteer from "../component/Volunteer";
import Victim from "../component/Help-need";
import MyTabs from "./bottom-navigator";


import Social_Screen from "../component/socialise/socialise-screen";
import Social_Screen2 from "../component/socialise/socialise-screen2";
import Social_Screen1A from "../component/socialise/socialise-screen1A";
import Social_Screen2A from "../component/socialise/socialise-screen2A";
import Social_Screen1B from "../component/socialise/socialise-screen1B";
import Social_Screen2B from "../component/socialise/socialise-screen2B";
import Social_Screen3B from "../component/socialise/socialise-screen3B";
import Social_Screen4B from "../component/socialise/socialise-screen4B";
import Social_Screen5B from "../component/socialise/socialise-screen5B";

import Pet_Screen from "../component/pet-care/pet";
import Pet_screen2 from "../component/pet-care/petCare2";
import Pet_screen3 from "../component/pet-care/petCare3";
import Pet_screen4 from "../component/pet-care/petCare4";
import Pet_screen5 from "../component/pet-care/petCare5";
import Pet_screen6 from "../component/pet-care/petCare6";
import Pet_screen7 from "../component/pet-care/petCare7";
import Pet_screen8 from "../component/pet-care/petCare8";
import Pet_screen9 from "../component/pet-care/petCare9";

import HandyWork_Screen from "../component/handywork-screen/handywork-screen";
import HandyWork_Screen2 from "../component/handywork-screen/handywork-screen2";
import HandyWork_Screen3 from "../component/handywork-screen/handywork-screen3";
import HandyWork_Screen4 from "../component/handywork-screen/handywork-screen4";
import HandyWork_Screen5 from "../component/handywork-screen/handywork-screen5";

import Transport_screen from "../component/transportation/transportation";
import Transport_screen2 from "../component/transportation/transportation2";
import Transport_screen3 from "../component/transportation/transportation3";
import Transport_screen4 from "../component/transportation/transportation4";
import Transport_screen5 from "../component/transportation/transportation5";

import { LOGIN_SCREEN, SIGNUP_SCREEN1, SIGNUP_SCREEN2, SIGNUP_SCREEN3, SIGNUP_SCREEN4 } from './screenNames'
import Login from "../component/Login";
import { getData } from "../utils/state/preferences";

const ScreenConstant = createStackNavigator();

function SocialScreen() {
  return (
    <ScreenConstant.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScreenConstant.Screen name="socialscreen1" component={Social_Screen} />
      <ScreenConstant.Screen name="socialscreen2" component={Social_Screen2} />
      <ScreenConstant.Screen
        name="socialscreen1A"
        component={Social_Screen1A}
      />
      <ScreenConstant.Screen
        name="socialscreen2A"
        component={Social_Screen2A}
      />
      <ScreenConstant.Screen
        name="socialscreen1B"
        component={Social_Screen1B}
      />
      <ScreenConstant.Screen
        name="socialscreen2B"
        component={Social_Screen2B}
      />
      <ScreenConstant.Screen
        name="socialscreen3B"
        component={Social_Screen3B}
      />
      <ScreenConstant.Screen
        name="socialscreen4B"
        component={Social_Screen4B}
      />
      <ScreenConstant.Screen
        name="socialscreen5B"
        component={Social_Screen5B}
      />
    </ScreenConstant.Navigator>
  );
}

function Petscreen() {
  return (
    <ScreenConstant.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScreenConstant.Screen name="PetScreen1" component={Pet_Screen} />
      <ScreenConstant.Screen name="PetScreen2" component={Pet_screen2} />
      <ScreenConstant.Screen name="PetScreen3" component={Pet_screen3} />
      <ScreenConstant.Screen name="PetScreen4" component={Pet_screen4} />
      <ScreenConstant.Screen name="PetScreen5" component={Pet_screen5} />
      <ScreenConstant.Screen name="PetScreen6" component={Pet_screen6} />
      <ScreenConstant.Screen name="PetScreen7" component={Pet_screen7} />
      <ScreenConstant.Screen name="PetScreen8" component={Pet_screen8} />
      <ScreenConstant.Screen name="PetScreen9" component={Pet_screen9} />
    </ScreenConstant.Navigator>
  );
}

function HandyWorkScreen() {
  return (
    <ScreenConstant.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScreenConstant.Screen
        name="handyWorkScreen1"
        component={HandyWork_Screen}
      />
      <ScreenConstant.Screen
        name="handyWorkScreen2"
        component={HandyWork_Screen2}
      />
      <ScreenConstant.Screen
        name="handyWorkScreen3"
        component={HandyWork_Screen3}
      />
      <ScreenConstant.Screen
        name="handyWorkScreen4"
        component={HandyWork_Screen4}
      />
      <ScreenConstant.Screen
        name="handyWorkScreen5"
        component={HandyWork_Screen5}
      />
    </ScreenConstant.Navigator>
  );
}

function TransportScreen() {
  return (
    <ScreenConstant.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScreenConstant.Screen
        name="transport_screen1"
        component={Transport_screen}
      />
      <ScreenConstant.Screen
        name="transport_screen2"
        component={Transport_screen2}
      />
      <ScreenConstant.Screen
        name="Transport_screen3"
        component={Transport_screen3}
      />
      <ScreenConstant.Screen
        name="Transport_screen4"
        component={Transport_screen4}
      />
      <ScreenConstant.Screen
        name="Transport_screen5"
        component={Transport_screen5}
      />
    </ScreenConstant.Navigator>
  );
}

function HomeScreen() {

  const [refresh, refresher] = useState(0)

  const currentState = store.getState();

  store.subscribe(() => {
    console.log(currentState);
    refresher(refresh + 1);
  })

  if (currentState.isLoading) {
    return <AppLoading />;
  }

  if (currentState.isNewUser && currentState.isSignedOut) {
    return <Onboard />;
  }

  if (!currentState.hasAccount && currentState.isSignedOut) {
    return (
      <NavigationContainer>
        <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
          <ScreenConstant.Screen name={SIGNUP_SCREEN1} component={SignUp_Screen_1} />
          <ScreenConstant.Screen name={SIGNUP_SCREEN2} component={SignUp_Screen_2} />
          <ScreenConstant.Screen name={SIGNUP_SCREEN3} component={SignUp_Screen_3} />
          <ScreenConstant.Screen name={SIGNUP_SCREEN4} component={SignUp_Screen_4} />
        </ScreenConstant.Navigator>
      </NavigationContainer>
    )
  }

  if (currentState.isSignedOut) {
    return (
      <NavigationContainer>
        <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
          <ScreenConstant.Screen name={LOGIN_SCREEN} component={Login} />
        </ScreenConstant.Navigator>
      </NavigationContainer>
    )
  }

  // if signed in
  else {
    return (

      <NavigationContainer>
        <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
          {/* <ScreenConstant.Screen name="OB" component={Onboard_screen} /> */}
          <ScreenConstant.Screen name="Main" component={MyTabs} />

          <ScreenConstant.Screen
            name="social_screen"
            options={{
              cardStyleInterpolator:
                CardStyleInterpolators.forScaleFromCenterAndroid,
            }}
            component={SocialScreen}
          />

          <ScreenConstant.Screen
            name="pet_screen"
            options={{
              cardStyleInterpolator:
                CardStyleInterpolators.forScaleFromCenterAndroid,
            }}
            component={Petscreen}
          />

          <ScreenConstant.Screen
            name="handywork_screen"
            options={{
              cardStyleInterpolator:
                CardStyleInterpolators.forScaleFromCenterAndroid,
            }}
            component={HandyWorkScreen}
          />

          <ScreenConstant.Screen
            name="transport_screen"
            options={{
              cardStyleInterpolator:
                CardStyleInterpolators.forScaleFromCenterAndroid,
            }}
            component={TransportScreen}
          />
        </ScreenConstant.Navigator>
      </NavigationContainer>
    );
  }



}

export default HomeScreen;
