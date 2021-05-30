import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../Items/Colors";
import Dark_Button from "../../Items/Buttons/dark-bt";
import { color } from "react-native-reanimated";
import styles from './ProfileStyles'
import AppText from "../AppText/AppText";

const FeedbackScreen = (props) => {
  const navigation = useNavigation();
  const [message, onChangeMessage] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.top_navigation}>
        <TouchableOpacity 
          onPress={() => props.navigation.goBack()}
          style={{ width: '33%' }}  
        >
          <AppText style={[styles.top_navigation_text, { textAlign: 'left' }]}>
            <Feather
              name='chevron-left'
              size={16}
              color='white'
            />
            Back
          </AppText>
        </TouchableOpacity>
        <View style={{ width: '33%' }}>
          <AppText style={[styles.top_navigation_header, { textAlign: 'center' }]}>
            Feedback
          </AppText>
        </View>
        <View style={{ width: '33%' }}></View>
      </View>

      <View style={styles.feedback_container}>
        <AppText style={styles.feedback_header_text}>Submit feedback</AppText>
        <AppText style={styles.autobiography}>
          We would love to hear from you.If you have any comments,
          suggestions, or feedback send us a message and we will be in touch
          shortly
        </AppText>
        <TextInput
          style={styles.feedback_input_area}
          onChangeText={onChangeMessage}
          value={message}
          placeholder="Tell us your thoughts.."
          maxLength={1000}
          multiline
        />
        <View style={{ width: '33%', marginTop: 44 }}>
          <Dark_Button>
            <Text style={{ fontSize: 18 }}> Submit</Text>
          </Dark_Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FeedbackScreen;
