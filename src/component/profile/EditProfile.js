import React, { useEffect, useState } from "react";
import { View, Switch, TouchableOpacity, SafeAreaView, SectionList, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../Items/Colors";
import { useNavigation } from '@react-navigation/native'
import store from "../../asyncStorage/store";
import styles from './ProfileStyles'
import StandardListItem from "../ListItems/StandardListItem/StandardListItem";
import AppText from "../AppText/AppText";
import InputField from "../InputField/InputField";
import { Input } from "react-native-elements";
import Dark_Button from "../../Items/Buttons/dark-bt";
import { updateUser } from "../../data/users";
import fb from "../../config/firebase";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const ItemSeparator = () => {
  return <View style={styles.section_header}></View>
}

const SettingScreen = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const uid = store.getState().user.uid

  const tabBarHeight = useBottomTabBarHeight()

  useEffect(() => {
    const user = store.getState().user
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
  }, [])

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
            Edit Profile
          </AppText>
        </View>
        <View style={{ width: '33%' }}></View>
      </View>
      
      <View style={styles.edit_container(tabBarHeight)}>
        <ScrollView>
          <View style={{ marginTop: 32 }}></View>
          <InputField 
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <View style={{ marginTop: 32 }}></View>
          <InputField 
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <View style={{ marginTop: 32 }}></View>
          <InputField 
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={{ marginTop: 32 }}></View>
          <InputField 
            label="Address"
            value={address}
            onChangeText={setAddress}
          />
          <View style={{ marginTop: 32 }}></View>
          <InputField 
            label="Phone"
            value={phone}
            onChangeText={setPhone}
          />
        </ScrollView>

        <View style={{ marginTop: 32 }}></View>
        <View
          style={styles.save_edits_button}
        >
          <Dark_Button
            onPress={() => updateUser({ firstName, lastName, email, address, phone, uid })}
          >Save</Dark_Button>
        </View>
        <View style={{ marginTop: 32 }}></View>
      </View>
      

    </SafeAreaView>
  )
}

export default SettingScreen;
