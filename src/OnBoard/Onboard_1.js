import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppText from '../component/AppText/AppText';
import styles from './OnboardStyles';

const Onboard_screen = () => {
  
  return (
    <View style={Styles.screen}>
      <Text>code you layouts
        </Text> 
      
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1.5%',
  },
})

export default Onboard_screen;
