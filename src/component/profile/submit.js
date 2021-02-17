import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";

const UseTextinput = (props) => {
  return <TextInput {...props} editable maxLength={250} />;
};

const FeedbackScreen = (props) => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState();
  const [email, onChangeEmail] = useState();
  const [phone, onChangePhone] = useState();
  const [message, onChangeMessage] = useState();

  return (
    <View style={styles.screen}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.tophead}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "2%",
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.top1}>
              <Feather name="chevron-left" size={15} color={Colors.primary3} />{" "}
              Back{" "}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.top2}>Feedback </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "2%",
            }}
          >
            <Text style={styles.top3}>Edit </Text>
          </View>
        </View>

        <View style={styles.mid1}>
          <Text style={styles.head1}>Submit feedback</Text>
          <Text></Text>
        </View>
        {/* <Text></Text> */}
        <View style={styles.midmain}>
          <Text style={styles.head2}>
            We would love to hear from you.If you have any comments,
            suggestions, or feedback send us a message and we will be in touch
            shortly
          </Text>
        </View>

        <View style={styles.midbox}>
          <View style={styles.mid2}>
            <Text style={styles.head3}>Name</Text>
            <TextInput
              style={styles.input}
              editable={true}
              onChangeText={(text) => onChangeName(text)}
              placeholder={"   Enter Here"}
              value={name}
            />
          </View>

          <View style={styles.mid2}>
            <Text style={styles.head3}>Email</Text>
            <TextInput
              style={styles.input}
              editable={true}
              onChangeText={(text) => onChangeEmail(text)}
              placeholder={"   email@email.com"}
              value={email}
            />
          </View>

          <View style={styles.mid2}>
            <Text style={styles.head3}>Phone</Text>
            <TextInput
              style={styles.input}
              editable={true}
              keyboardType={"numeric"}
              onChangeText={(text) => onChangePhone(text)}
              placeholder={"   (555) 555- 555"}
              value={phone}
            />
          </View>

          <View style={styles.mid2}>
            <Text style={styles.head3}>Message</Text>
            {/* <ScrollView style={ {width: "100%" }} > */}
            <UseTextinput
              style={styles.input}
              editable={true}
              multiline={true}
              numberOfLines={10}
              onChangeText={(text) => onChangeMessage(text)}
              placeholder={"   Message"}
              value={message}
            />
            {/* </ScrollView> */}
          </View>
        </View>

        <View style={styles.bottom}>
          <Dark_Button>
            <Text style={{ fontSize: 20 }}> Submit</Text>
          </Dark_Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
  },
  tophead: {
    flex: 1.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "5%",
    backgroundColor: Colors.primary4,
  },
  mid1: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    width: "100%",
    padding: "2%",
    paddingTop: "10%",
    justifyContent: "flex-start",
  },
  midmain: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2%",
  },
  midbox: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    width: "100%",
    padding: "2%",
    justifyContent: "center",
    paddingTop: "20%",
  },
  bottom: {
    flex: 3,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: "30%",
  },

  top1: {
    fontSize: 15,
    color: Colors.primary3,
  },
  top2: {
    fontSize: 15,
    color: Colors.primary3,
  },
  top3: {
    fontSize: 15,
    color: Colors.primary3,
  },
  mid2: {
    width: "100%",
    flexDirection: "column",
    flex: 3,
  },
  head1: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary1,
    alignSelf: "center",
  },
  head2: {
    fontSize: 15,
    alignSelf: "center",
    paddingLeft: "2%",
    color: Colors.secondary1,
  },
  head3: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: "2%",
    color: Colors.secondary2,
    alignSelf: "flex-start",
  },
  input: {
    paddingTop: "1.5%",
    fontSize: 16,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: "0%",
  },
});

export default FeedbackScreen;
