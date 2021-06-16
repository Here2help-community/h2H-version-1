import { State, PanGestureHandler } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { View, SafeAreaView, Animated, Dimensions, Platform } from "react-native";
import { Button } from 'react-native-elements';
import styles from './OnboardStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../asyncStorage/store';
import { SIGN_UP } from '../asyncStorage/actionsList';
import Dark_Button from '../Items/Buttons/dark-bt';
import Onboard_1 from './Onboard_1';
import Onboard_2 from './Onboard_2';
import Onboard_3 from './Onboard_3';
import { signInWithFacebook } from '../utils/authMethods';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const THRESHOLD = 0.25 * windowWidth;
const NUM_OF_PAGES = 3;

const Onboard_screen = (props) => {
  const [snapX, setSnapX] = useState(0);
  const [progress, setProgress] = useState([true, false, false]);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  const nextScreen = () => {
    AsyncStorage.setItem("initial_start", "false");
    store.dispatch({ type: SIGN_UP });
  };

  const panAnimStateChange = (evt) => {
    fadeIn.setValue(0);
    fadeOut.setValue(1);

    if (
      -evt.nativeEvent.translationX > THRESHOLD &&
      evt.nativeEvent.state === State.END &&
      snapX > -windowWidth * (NUM_OF_PAGES - 1)
    ) {
      setSnapX(snapX - windowWidth);

      Animated.spring(slideAnim, {
        toValue: snapX - windowWidth,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();

      let i = 0;
      let new_progress = [false, false, false];
      while (progress[i]) {
        new_progress[i] = true;
        i++;
      }
      new_progress[i] = true;
      setProgress(new_progress);
    } else if (
      evt.nativeEvent.translationX > THRESHOLD &&
      evt.nativeEvent.state === State.END &&
      snapX < 0
    ) {
      setSnapX(snapX + windowWidth);

      Animated.spring(slideAnim, {
        toValue: snapX + windowWidth,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();

      let i = 0;
      let new_progress = [false, false, false];
      while (progress[i]) {
        new_progress[i] = true;
        i++;
      }
      if (i > 0) new_progress[i - 1] = false;
      setProgress(new_progress);
    } else if (evt.nativeEvent.state === State.END) {
      Animated.spring(slideAnim, {
        toValue: snapX,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();
    }
  };

  const panAnim = (evt) => {
    if (evt.nativeEvent.state === State.ACTIVE) {
      Animated.spring(fadeIn, {
        toValue: Math.abs(evt.nativeEvent.translationX) / windowWidth,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();
      Animated.spring(fadeOut, {
        toValue: 1 - Math.abs(evt.nativeEvent.translationX) / windowWidth,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();
      Animated.spring(slideAnim, {
        toValue: snapX + evt.nativeEvent.translationX,
        useNativeDriver: Platform.OS !== "web" ? true : false,
      }).start();
    }
  };

  const panStyle = (page_index) => {
    return {
      transform: [{ translateX: slideAnim }],
      opacity: snapX / windowWidth === -page_index ? fadeOut : fadeIn,
    };
  };

  return (
    <PanGestureHandler
      onGestureEvent={panAnim}
      onHandlerStateChange={panAnimStateChange}
    >
      <SafeAreaView style={{ ...styles.screen, ...props.style }}>
        <View style={styles.container}>
          <View style={styles.top_navigation}>
            <Button
              type="clear"
              title="Skip"
              titleStyle={styles.top_nav_text}
              onPress={nextScreen}
            />
          </View>

          <View style={[styles.content_container]}>
            <Animated.View style={[styles.page, panStyle(0)]}>
              <Onboard_1 />
            </Animated.View>

            <Animated.View style={[styles.page, panStyle(1)]}>
              <Onboard_2 />
            </Animated.View>

            <Animated.View style={[styles.page, panStyle(2)]}>
              <Onboard_3 />
            </Animated.View>
          </View>

          <View style={styles.navigation}>
            <View style={styles.navigation_control}>
              {progress[2] ? (
                <View style={{ width: "30%", alignSelf: "flex-end" }}>
                  <Dark_Button onPress={nextScreen}>Let's go</Dark_Button>
                </View>
              ) : (
                <View></View>
              )}
            </View>
            <View style={styles.progress_bar_container}>
              <View
                style={
                  progress[0] ? styles.progress_bar_filled : styles.progress_bar
                }
              ></View>
              <View
                style={
                  progress[1] ? styles.progress_bar_filled : styles.progress_bar
                }
              ></View>
              <View
                style={
                  progress[2] ? styles.progress_bar_filled : styles.progress_bar
                }
              ></View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default Onboard_screen;
