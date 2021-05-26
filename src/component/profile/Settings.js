import React, { useEffect, useState } from "react";
import { View, Switch, TouchableOpacity, SafeAreaView, SectionList } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../Items/Colors";
import { useNavigation } from '@react-navigation/native'
import styles from './ProfileStyles'
import StandardListItem from "../ListItems/StandardListItem/StandardListItem";
import AppText from "../AppText/AppText";

const ItemSeparator = () => {
  return <View style={styles.section_header}></View>
}

const SettingScreen = (props) => {
  const navigation = useNavigation();
  const [unitIndex, ToggleUnit] = useState(0);
  const [allowPushNotifications, setAllowPushNotifications] = useState(false);
  const [allowEmailUpdates, setAllowEmailUpdates] = useState(false);
  const [saveEventsToCalendar, setSaveEventsToCalendar] = useState(false);

  const units = ["Kilometer", "Miles"];

  const getUnit = () => units[unitIndex];

  const toggleHandler = () => {
    let tempIndex = unitIndex;
    tempIndex = (tempIndex + 1) % units.length;
    ToggleUnit(tempIndex);
  };

  const DATA = [
    {
      data: [
        {
          field: 'Allow push notifications',
          value: <Switch 
            trackColor={{ false: Colors.switch_disabled, true: Colors.switch_enabled }}
            thumbColor='white'
            onValueChange={(value) => setAllowPushNotifications(value)}
            value={allowPushNotifications}
          />,
        },
        {
          field: 'Allow email updates',
          value: <Switch 
            trackColor={{ false: Colors.switch_disabled, true: Colors.switch_enabled }}
            thumbColor='white'
            onValueChange={(value) => setAllowEmailUpdates(value)}
            value={allowEmailUpdates}
          />,
        },
        {
          field: 'Save events to calendar',
          value: <Switch 
            trackColor={{ false: Colors.switch_disabled, true: Colors.switch_enabled }}
            thumbColor='white'
            onValueChange={(value) => setSaveEventsToCalendar(value)}
            value={saveEventsToCalendar}
          />,
        },
        {
          field: 'Units of measurement',
          value: <AppText style={styles.list_item_text}>TODO</AppText>,
        },
      ]
    }
  ]

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
            Settings
          </AppText>
        </View>
        <View style={{ width: '33%' }}></View>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.field + index }
        renderItem={
          ({ item }) => {
            return (
              <StandardListItem 
                field={<AppText style={styles.list_item_text}>{item.field}</AppText>}
                value={item.value}
                onPress={item.onPress}
              />
            )
          }
        }
        ListHeaderComponent={<View style={styles.section_header}></View>}
        ListFooterComponent={<View style={styles.section_header}></View>}
        ItemSeparatorComponent={ItemSeparator}
      />      
    </SafeAreaView>
  )
}

export default SettingScreen;
