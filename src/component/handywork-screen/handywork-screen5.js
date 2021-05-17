import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import formatDate from "../formatDate";
import Modal from 'react-native-modal';

const HandyWork_Screen5 = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };

  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;
    const [isModalVisible, setModalVisible] = useState(false);



  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />{" "}
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>Review your request</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Text style={styles.head2}>Type of service</Text>
          <TextInput style={styles.input} editable={false} value={data.type} />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Date</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={formatDate(data.selectedDate)}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Time</Text>
          <TextInput style={styles.input} editable={false} value={timestring} />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Notes</Text>
          <TextInput style={styles.input} editable={false} value={data.note} />
        </View>
      </View>

      <View style={styles.container3}>
        <Dark_Button
         onPress={() => {setModalVisible(true);}}
         >

          <Text style={{ fontSize: 18 }}>Submit</Text>
        </Dark_Button>
      </View>

      <Modal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      backdropColor='#2D375B'
      backdropOpacity={0.7}
      avoidKeyboard= {false}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => {setModalVisible(false)}}

      >

        <View style={styles.cardsection}>
                <View style={{ flex: 0.5, flexDirection: "column", alignSelf: "flex-end", paddingRight: "2%"}}>
                  <TouchableOpacity
                  onPress={() => { setModalVisible(false);}}>
                  <Feather name="x-circle" size={25} color={Colors.primary3}   />
                  </TouchableOpacity>
                  </View>
                  <View style={{flex: 0.4, flexDirection: "column", }}>
                <Image
                  source={require('../h2h/Vector85.png')}
                  resizeMode= 'contain'
                   style={{
                    width: '25%',
                    height: '25%',
                    alignSelf: "center",


                   }}
                   /></View>
                   <View style={{flex: 1.2, flexDirection: "column"}}>
                   <Text style={styles.modaltextcontainer1}>Your request is posted!</Text>


                   <Text style={styles.modaltextcontainer2}>We will share your transportation request,
                    so local peple can reach out to you!</Text></View>

                {/* the above view contaisn text */}
                <View style={styles.modalbottomcontainer}>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    activeOpacity={0.2}
                    underlayColor="#596188"

                    style={styles.bottomblock1}>
                    <Text style={{fontSize: 15}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    activeOpacity={0.2}
                    underlayColor="#596188"

                     style={styles.bottomblock2}>
                    <Text style={{fontSize: 15}}>Got it!</Text>
                    </TouchableOpacity>

                </View>
                </View>


      </Modal>

      </View>




  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1.8%",
    marginTop: "7%",
  },
  top: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  container1: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 2.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "40%",
    paddingHorizontal: "2%",
    // backgroundColor: "#9811C9",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingLeft: "60%",
    // paddingBottom: '1%',
    // backgroundColor: "#C6C438",
  },
  box: {
    width: "100%",
    //  backgroundColor: "#267DA5",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 15.6,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  input: {
    paddingTop: "2.5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  cardsection: {
    flex: 0.65,
    marginVertical: "36%",
    marginRight: "2%",
    marginLeft: "2%",
    flexDirection: "column",
    backgroundColor: '#ffffff',
    justifyContent: "flex-end",
    borderRadius: 20,
    // width: Dimensions.get('window').width * 0.85 ,
    // height: Dimensions.get('window').height * 0.25,
  },

  modalbottomcontainer: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },

  bottomblock1: {
    flex: 0.8,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderRightWidth: 2,
    borderRightColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#e0e0e0",
    borderBottomLeftRadius: 20
  },

  bottomblock2: {
    flex: 0.8,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#e0e0e0",
    borderLeftWidth: 2,
    borderLeftColor: "#e0e0e0",
    borderBottomEndRadius: 20
  },

  modaltextcontainer1: {
    fontSize: 24,
    color: Colors.profile_item_text,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: "5%"
  },

  modaltextcontainer2: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: "6%",
  },
});

export default HandyWork_Screen5;
