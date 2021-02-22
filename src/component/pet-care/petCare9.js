import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GOOGLE_AUTH } from "../../asyncStorage/actionsList";
import store_redux_thunk from "../../asyncStorage/store";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import formatDate from "../formatDate";
import { NEW_REQUEST } from "../Redux/ActionTypeList";
import store from "../Redux/Store";

const db = firebase.firestore();

const Pet_screen9 = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };
  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;

  const checkDuplicacy = (query) => {
    let checkType = query.serviceType === "PetCare";
    let checkDate = query.data.date === data.date;
    let checkTime = query.data.time === data.time;
    let checkName = query.data.petName === data.petName;
    return checkType && checkDate && checkTime && checkName;
  };

  const submitHandler = () => {
    // check duplicacy
    const currentState = store.getState();
    const Query = currentState.filter(checkDuplicacy);
    if (Query.length > 0) {
      console.log("DUPLICATE QUERY");
      console.log("Query", Query);
    }

    // if not duplicate request then add to redux
    else {
      store.dispatch({
        type: NEW_REQUEST,
        payload: {
          data: { ...data },
          serviceType: "PetCare",
          id: String(data.date + " " + timestring),
        },
      });

      // notify and show the state
      console.log("submittion Handled", store.getState());

      // make user uid as key
      var user = store_redux_thunk.getState().userToken;
      // if a google user then target changes
      if (store_redux_thunk.getState().authType === GOOGLE_AUTH) {
        user = user.user;
      }
      const uid = user.uid;

      // get the latest data from redux sync
      const queryData = store.getState();
      const latestData = queryData[queryData.length - 1];

      // sending user info
      db.collection("queries")
        .doc(uid)
        .set(
          {
            userData: { ...user.providerData[0] },
          },
          { merge: true }
        )
        .then(function () {
          console.log("Document successfully written!");
          // sending data
          db.collection("queries")
            .doc(uid)
            .collection("service-requests")
            .doc("for " + latestData.id)
            .set(
              {
                request: latestData,
              },
              { merge: true }
            )
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }

    props.navigation.navigate("PetScreen9");
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}>Review your request </Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.head2}>Type of Pet Care</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.CareType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Date</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={formatDate(data.date)}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Time</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={timestring}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Location for pet sitting</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.location}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Type of pet</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.PetType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet's name</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.petName}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet size</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.size}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Notes</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.addtional}
        ></TextInput>
      </View>

      <View style={styles.container6}>
        <Dark_Button onPress={submitHandler}>
          <Text>Submit</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    padding: "1.8%",
  },
  container1: {
    flex: 1,
    width: "100%",
  },
  container2: {
    flex: 1.5,
    width: "100%",
  },
  container6: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  head3: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
  top: {
    flex: 0.6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
  input: {
    paddingHorizontal: "5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Pet_screen9;
